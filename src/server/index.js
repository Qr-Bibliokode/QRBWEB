var hapi = require('hapi');
var server = new hapi.Server();
var intert = require('inert');
var routes = require('./routes');

server.connection({port: 3000});

server.register(intert, function () {
});

server.route(routes);

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: 'src/client/main/',
            listing: false,
            index: true
        }
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

server.start(function () {
    console.log('Running server at ', server.info.uri);
});