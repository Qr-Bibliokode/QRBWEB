var hapi = require('hapi');
var server = new hapi.Server();
var intert = require('inert');

server.connection({port: 3000});

server.register(intert, function () {
});

var urlSwaggerJson = 'http://localhost:8080/swagger.json';

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

/**
 * Dynamic routes
 */
var client = require('swagger-client');

server.route({
        method: 'GET',
        path: '/authors/{param*}',
        handler: function (request, reply) {
            var swagger = new client({
                url: urlSwaggerJson,
                success: function () {
                    swagger.author.list({max: 10, offset: 0}, function (response) {
                        reply(response.data).type('application/json')
                    });
                }
            });
        }
    }
);

server.route({
        method: 'DELETE',
        path: '/authors/{id}',
        handler: function (request, reply) {
            var swagger = new client({
                url: urlSwaggerJson,
                success: function () {
                    swagger.author.delete({authorId: request.params.id}, function (response) {
                        reply(response.data).type('application/json')
                    });
                }
            });
        }
    }
);

server.route({
        method: 'POST',
        path: '/authors/{param*}',
        handler: function (request, reply) {
            var swagger = new client({
                url: urlSwaggerJson,
                success: function () {
                    swagger.author.create({author: request.payload}, function (response) {
                        reply(response.data).type('application/json')
                    });
                }
            });
        }
    }
);

server.start(function () {
    console.log('Running server at ', server.info.uri);
});