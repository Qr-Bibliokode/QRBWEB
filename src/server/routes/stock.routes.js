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
        path: '/stock/',
        handler: function (request, reply) {
            swagger.stock.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/stock/{stockId}',
        handler: function (request, reply) {
            swagger.stock.getById({stockId: request.params.stockId}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/stock/{id}',
        handler: function (request, reply) {
            swagger.stock.delete({stockId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/stock/',
        handler: function (request, reply) {
            swagger.stock.create({stock: request.payload}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/stock/{id}',
        handler: function (request, reply) {
            swagger.stock.update({stock: request.payload, stockId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    }
];