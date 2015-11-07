var client = require('swagger-client');

var urlSwaggerJson = 'http://localhost:8080/swagger/swagger.json';

var swagger = new client({
    url: urlSwaggerJson,
    success: function () {
    }
});


var users = {
    john: {
        id: 'john',
        password: 'password',
        name: 'John Doe'
    }
};

var login = function (request, reply) {

    if (request.auth.isAuthenticated) {
        return reply.redirect('/');
    }

    var message = '';
    var account = null;

    if (request.method === 'post') {

        if (!request.payload || !request.payload.username || !request.payload.password) {

            message = 'Usuário e senha são necessários para realizar o login';
        }
        else {
            account = users[request.payload.username];
            //TODO Procurar usuário no webserver
            if (!account ||
                account.password !== request.payload.password) {

                message = 'Usuário ou senha inválidos';
            }
        }
    }

    if (request.method === 'get' ||
        message) {

        return reply.file('src/server/login/login.html');
    }

    request.auth.session.set(account);
    return reply.redirect('/');
};

var logout = function (request, reply) {

    request.auth.session.clear();
    return reply.redirect('/');
};

var home = function (request, reply) {

    console.log(request.auth.isAuthenticated);
    reply('<html><head><title>Login page</title></head><body><h3>Welcome '
        + request.auth.credentials.name
        + '!</h3><br/><form method="get" action="/logout">'
        + '<input type="submit" value="Logout">'
        + '</form></body></html>');
};

module.exports = [
    {
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: 'src/client/main/',
                listing: false,
                index: true
            }
        },
        config: {
            auth: 'session'
        }
    },
    {
        method: ['GET', 'POST'],
        path: '/login',
        config: {
            handler: login,
            auth: {
                mode: 'try',
                strategy: 'session'
            },
            plugins: {
                'hapi-auth-cookie': {
                    redirectTo: false
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/logout',
        config: {
            handler: logout,
            auth: 'session'
        }
    }
];