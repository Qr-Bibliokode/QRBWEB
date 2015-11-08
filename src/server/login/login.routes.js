var login = function (request, reply) {
    if (request.auth.isAuthenticated) {
        return reply.redirect('/');
    }

    var message = '';
    var contaUsuario = null;

    if (request.method === 'post') {
        contaUsuario = request.payload;
        if (!contaUsuario.username) {
            return reply('Este usuário não está cadastrado no sistemae');
        } else {
            request.auth.session.set(contaUsuario);
            return reply("Usuário logado");
        }
    }

    if (request.method === 'get' || message) {
        return reply.file('src/server/login/login.html');
    }
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