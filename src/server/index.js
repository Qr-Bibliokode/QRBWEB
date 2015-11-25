var hapi = require('hapi');
var server = new hapi.Server();
var intert = require('inert');
var routes = require('./routes');
var restler = require('restler');

var urlSwaggerJson = 'http://localhost:8080/swagger/swagger.json';

server.connection({port: 3000});

server.register(require('hapi-auth-cookie'), function (err) {

    server.auth.strategy('session', 'cookie', {
        password: 'secret',
        cookie: 'sid-example',
        redirectTo: '/login',
        isSecure: false
    });
});

server.register(intert, function () {
});

server.route(routes);

server.route({
    method: 'GET',
    path: '/swagger/',
    handler: function (request, reply) {
        restler.get(urlSwaggerJson).on('complete', function (data) {
            reply(data)
        });
    }
});

server.route({
    method: 'GET',
    path: '/app/{param*}',
    handler: {
        directory: {
            path: 'src/client/main/app/',
            redirectToSlash: true,
            index: true
        }
    }
});

server.route({
    method: 'GET',
    path: '/bower_components/{params*}',
    handler: {
        directory: {
            path: 'bower_components/'
        }
    }
});

server.route({
    method: 'GET',
    path: '/server/{params*}',
    handler: {
        directory: {
            path: 'src/server/'
        }
    }
});

server.start(function () {
    console.log('Servidor rodando em ', server.info.uri);
});