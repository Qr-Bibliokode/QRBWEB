var client = require('swagger-client');

var urlSwaggerJson = 'http://localhost:3000/swagger/';

var swagger = new client({
    url: urlSwaggerJson,
    success: function () {
    }
});

module.exports = [
    {
        method: 'GET',
        path: '/autores/',
        handler: function (request, reply) {
            swagger.autor.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/autores/{autorId}',
        handler: function (request, reply) {
            swagger.autor.getById({autorId: request.params.autorId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/autores/{id}',
        handler: function (request, reply) {
            swagger.autor.delete({autorId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/autores/',
        handler: function (request, reply) {
            swagger.autor.create({autor: request.payload}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/autores/{id}',
        handler: function (request, reply) {
            swagger.autor.update({autor: request.payload, autorId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    }
];