var hapi = require('hapi');
var server = new hapi.Server();
var intert = require('inert');
var client = require('swagger-client');

server.connection({port: 3000});

server.register(intert, function () {
});

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
            path: 'src/client/main/app/components/author/list/author.list.html'
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

var ws = new client({
    url: 'http://localhost:8080/swagger.json',
    success: function () {
        ws.author.list({}, {
            responseContentType: 'application/json'
        }, function (author) {
            console.log('Authores', author.data);
        });
    }
});