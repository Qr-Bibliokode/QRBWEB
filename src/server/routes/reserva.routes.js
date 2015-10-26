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
        path: '/reservas/',
        handler: function (request, reply) {
            swagger.reserva.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/reservas/{reservaId}',
        handler: function (request, reply) {
            swagger.reserva.getById({reservaId: request.params.reservaId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/reservas/{id}',
        handler: function (request, reply) {
            swagger.reserva.delete({reservaId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/reservas/',
        handler: function (request, reply) {
            swagger.reserva.create({reserva: request.payload}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/reservas/{id}',
        handler: function (request, reply) {
            swagger.reserva.update({reserva: request.payload, reservaId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    }
];