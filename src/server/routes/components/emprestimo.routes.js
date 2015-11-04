var client = require('swagger-client');

var urlSwaggerJson = 'http://localhost:8080/swagger/swagger.json';

var swagger = new client({
    url: urlSwaggerJson,
    success: function () {
    }
});

module.exports = [
    {
        method: 'GET',
        path: '/emprestimos/',
        handler: function (request, reply) {
            swagger.emprestimo.list({max: 10, offset: 0}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/emprestimos/{emprestimoId}',
        handler: function (request, reply) {
            swagger.emprestimo.getById({emprestimoId: request.params.emprestimoId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'DELETE',
        path: '/emprestimos/{id}',
        handler: function (request, reply) {
            swagger.emprestimo.delete({emprestimoId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'POST',
        path: '/emprestimos/emprestar/',
        handler: function (request, reply) {
            swagger.emprestimo.emprestar({emprestimo: request.payload}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'PUT',
        path: '/emprestimos/{id}',
        handler: function (request, reply) {
            swagger.emprestimo.update({
                emprestimo: request.payload,
                emprestimoId: request.params.id
            }, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/emprestimos/devolver/{emprestimoId}',
        handler: function (request, reply) {
            swagger.emprestimo.devolver({emprestimoId: request.params.emprestimoId}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/emprestimos/renovar/{id}',
        handler: function (request, reply) {
            swagger.emprestimo.renovar({emprestimoId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/emprestimos/liberar/{id}',
        handler: function (request, reply) {
            swagger.emprestimo.liberar({emprestimoId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    },
    {
        method: 'GET',
        path: '/emprestimos/obtenhaHistoricoEmprestimosPorLivro/{id}',
        handler: function (request, reply) {
            swagger.emprestimo.obtenhaHistoricoEmprestimosPorLivro({livroId: request.params.id}, function (response) {
                reply(response.data).type('application/json')
            }, function (response) {
                reply(response.data).code(500).type('application/json')
            });
        }
    }
];