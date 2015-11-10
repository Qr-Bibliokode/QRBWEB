(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EstoqueCreateController', ['EstoqueFactory', 'LivroFactory', 'MessageFactory', EstoqueCreateController]);

    /** @ngInject */
    function EstoqueCreateController(EstoqueFactory, LivroFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            EstoqueFactory.create(vm.estoque).then(function () {
                MessageFactory.success('Inserido livro no estoque com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.estoque = '';
        };

        vm.loadLivros = function () {
            LivroFactory.list();
        };

        vm.getLivros = function () {
            return LivroFactory.get();
        };
    }
})();