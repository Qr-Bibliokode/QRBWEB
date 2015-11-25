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
        path: '/contaUsuarios/',
        handler: function (request, reply) {
            swagger.contaUsuario.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/contaUsuario/{contaUsuarioId}',
        handler: function (request, reply) {
            swagger.contaUsuario.getById({contaUsuarioId: request.params.contaUsuarioId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/contaUsuario/{id}',
        handler: function (request, reply) {
            swagger.contaUsuario.delete({contaUsuarioId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/contaUsuarios/',
        handler: function (request, reply) {
            swagger.contaUsuario.create({contaUsuario: request.payload}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/contaUsuarios/{id}',
        handler: function (request, reply) {
            swagger.contaUsuario.update({
                contaUsuario: request.payload,
                contaUsuarioId: request.params.id
            }, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/contaUsuarios/verificarMultas/{contaUsuarioId}',
        handler: function (request, reply) {
            swagger.contaUsuario.verificarMultas({contaUsuarioId: request.params.contaUsuarioId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/contaUsuarios/pagarMulta/{multaId}',
        handler: function (request, reply) {
            swagger.contaUsuario.pagarMulta({multaId: request.params.multaId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/contaUsuarios/bloquearContaUsuario/{contaUsuarioId}',
        handler: function (request, reply) {
            swagger.contaUsuario.bloquearContaUsuario({contaUsuarioId: request.params.contaUsuarioId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/contaUsuarios/habilitarContaUsuario/{contaUsuarioId}',
        handler: function (request, reply) {
            swagger.contaUsuario.habilitarContaUsuario({contaUsuarioId: request.params.contaUsuarioId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/contaUsuarios/validaUsuario/{username}/{password}',
        handler: function (request, reply) {
            swagger.contaUsuario.validaUsuario({
                username: request.params.username,
                password: request.params.password
            }, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    }
];