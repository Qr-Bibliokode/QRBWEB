(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockEditController', ['StockFactory', '$stateParams', '$state', 'MessageFactory', 'BookFactory', StockEditController]);

    /** @ngInject */
    function StockEditController(StockFactory, $stateParams, $state, MessageFactory, BookFactory) {
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

        vm.loadBooks = function () {
            BookFactory.list();
        };

        vm.getBooks = function () {
            return BookFactory.get();
        };

        vm.loadStock();
    }
})
();
