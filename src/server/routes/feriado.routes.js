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
        path: '/feriados/',
        handler: function (request, reply) {
            swagger.feriado.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/feriados/{feriadoId}',
        handler: function (request, reply) {
            swagger.feriado.getById({feriadoId: request.params.feriadoId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/feriados/{id}',
        handler: function (request, reply) {
            swagger.feriado.delete({feriadoId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/feriados/',
        handler: function (request, reply) {
            swagger.feriado.create({feriado: request.payload}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/feriados/{id}',
        handler: function (request, reply) {
            swagger.feriado.update({feriado: request.payload, feriadoId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    }
];