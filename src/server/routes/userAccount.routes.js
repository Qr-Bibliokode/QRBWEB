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
        path: '/userAccounts/',
        handler: function (request, reply) {
            swagger.userAccount.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/userAccounts/{userAccountId}',
        handler: function (request, reply) {
            swagger.userAccount.getById({userAccountId: request.params.userAccountId}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/userAccounts/{id}',
        handler: function (request, reply) {
            swagger.userAccount.delete({userAccountId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/userAccounts/',
        handler: function (request, reply) {
            swagger.userAccount.create({userAccount: request.payload}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/userAccounts/{id}',
        handler: function (request, reply) {
            swagger.userAccount.update({userAccount: request.payload, userAccountId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            });
        }
    }
];