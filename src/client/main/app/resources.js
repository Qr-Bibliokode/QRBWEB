(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('ResourcesFactory', [ResourcesFactory]);

    /** @ngInject */
    function ResourcesFactory() {
        var frontendService = 'http://localhost:3000/';

        return {
            DOMAIN_SERVER: frontendService,
            AUTOR_API: frontendService + 'autores/',
            CATEGORIA_API: frontendService + 'categorias/',
            COMENTARIO_API: frontendService + 'comentarios/',
            CONTAUSUARIO_API: frontendService + 'contaUsuarios/',
            ESTOQUE_API: frontendService + 'estoque/',
            EMPRESTIMO_API: frontendService + 'emprestimos/',
            ESTUDANTE_API: frontendService + 'estudantes/',
            FERIADO_API: frontendService + 'feriados/',
            FUNCIONARIO_API: frontendService + 'funcionarios/',
            IDIOMA_API: frontendService + 'idiomas/',
            LIVRO_API: frontendService + 'livros/',
            RESERVA_API: frontendService + 'reservas/'
        };
    }
})();
