(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EstoqueEditController', ['EstoqueFactory', '$stateParams', '$state', 'MessageFactory', 'LivroFactory', EstoqueEditController]);

    /** @ngInject */
    function EstoqueEditController(EstoqueFactory, $stateParams, $state, MessageFactory, LivroFactory) {
        var vm = this;

        vm.estoque = '';

        vm.update = function () {
            EstoqueFactory.update(vm.estoque).then(function () {
                MessageFactory.success('Estoque alterado com sucesso.');
                $state.transitionTo('estoqueList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadEstoque = function () {
            EstoqueFactory.getById($stateParams.id).then(function (result) {
                vm.estoque = result.data;
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

        vm.loadEstoque();
    }
})
();
