var Hapi = require('hapi');
var Server = new Hapi.Server();
var Inert = require('inert');

Server.connection({port: 3000});

Server.register(Inert, function () {
});

Server.route({
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

Server.route({
    method: 'GET',
    path: '/bower_components/{params*}',
    handler: {
        directory: {
            path: 'bower_components/',
            listing: true
        }
    }
});

Server.start(function () {
    console.log('Running server at ', Server.info.uri);
});