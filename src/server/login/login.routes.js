var client = require('swagger-client');

var urlSwaggerJson = 'http://localhost:8080/swagger/swagger.json';

var swagger = new client({
    url: urlSwaggerJson,
    success: function () {
    }
});


var usuarios = {
    felansu: {
        id: 'felansu',
        password: 'felansu',
        name: 'Ferran'
    },
    admin: {
        id: 'admin',
        password: 'admin',
        name: 'Administrador'
    }
};


var login = function (request, reply) {
    if (request.auth.isAuthenticated) {
        return reply.redirect('/');
    }

    var message = '';
    var contaUsuario = null;

    if (request.method === 'post') {

        if (!request.payload || !request.payload.username || !request.payload.password) {
            message = 'Usuário e senha são necessários para realizar o login';
        } else {

            contaUsuario = usuarios[request.payload.username];

            if (!contaUsuario || contaUsuario.password !== request.payload.password) {
                message = 'Usuário ou senha inválidos';
            }
        }
    }

    if (request.method === 'get' || message) {
        return reply.file('src/server/login/login.html');
    }

    request.auth.session.set(contaUsuario);
    return reply.redirect('/');
};

var usuarioLogado = function (request) {
    return request.auth.credentials.id
};

var logout = function (request, reply) {
    request.auth.session.clear();
    return reply.redirect('/');
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
    },
    {
        method: 'GET',
        path: '/usuarioLogado',
        config: {
            handler: usuarioLogado,
            auth: 'session'
        }
    }
];