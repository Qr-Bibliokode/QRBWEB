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
        path: '/status/',
        handler: function (request, reply) {
            swagger.status.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/status/{statusId}',
        handler: function (request, reply) {
            swagger.status.getById({statusId: request.params.statusId}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/status/{id}',
        handler: function (request, reply) {
            swagger.status.delete({statusId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/status/',
        handler: function (request, reply) {
            swagger.status.create({status: request.payload}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/status/{id}',
        handler: function (request, reply) {
            swagger.status.update({status: request.payload, statusId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    }
];