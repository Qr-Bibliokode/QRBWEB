(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockEditController', ['StockFactory', '$stateParams', '$state', 'MessageFactory', 'LivroFactory', StockEditController]);

    /** @ngInject */
    function StockEditController(StockFactory, $stateParams, $state, MessageFactory, LivroFactory) {
        var vm = this;

        vm.stock = '';

        vm.update = function () {
            StockFactory.update(vm.stock).then(function () {
                MessageFactory.success('Estoque alterado com sucesso.');
                $state.transitionTo('stockList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadStock = function () {
            StockFactory.getById($stateParams.id).then(function (result) {
                vm.stock = result.data;
            });
        };

        vm.clear = function () {
            vm.stock = '';
        };

        vm.loadLivros = function () {
            LivroFactory.list();
        };

        vm.getLivros = function () {
            return LivroFactory.get();
        };

        vm.loadStock();
    }
})
();
