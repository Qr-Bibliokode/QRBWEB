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
    path: '/{param*}',
    handler: {
        directory: {
            path: 'src/client/main/',
            redirectToSlash: true,
            index: true
        }
    }
});

server.route({
    method: 'GET',
    path: '/author/{params*}',
    handler: {
        directory: {
            path: 'src/client/main/app/components/author/author.html'
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
    path: '/app/{params*}',
    handler: {
        directory: {
            path: 'src/client/main/app/'
        }
    }
});

server.start(function () {
    console.log('Running server at ', server.info.uri);
});