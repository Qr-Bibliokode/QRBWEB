var client = require('swagger-client');

var urlSwaggerJson = 'http://localhost:8080/swagger.json';

var swagger = new client({
    url: urlSwaggerJson,
    success: function () {
    }
});

module.exports = [
    {
        method: 'GET',
        path: '/authors/',
        handler: function (request, reply) {
            swagger.author.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/authors/{authorId}',
        handler: function (request, reply) {
            swagger.author.getById({authorId: request.params.authorId}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/authors/{id}',
        handler: function (request, reply) {
            swagger.author.delete({authorId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/authors/',
        handler: function (request, reply) {
            swagger.author.create({author: request.payload}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/authors/{id}',
        handler: function (request, reply) {
            swagger.author.update({author: request.payload, authorId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    }
];