(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockEditController', ['StockFactory', '$stateParams', '$state', StockEditController]);

    /** @ngInject */
    function StockEditController(StockFactory, $stateParams, $state) {
        var vm = this;

        vm.stock = '';

        vm.update = function () {
            StockFactory.update(vm.stock).then(function () {
                vm.clear();
                $state.transitionTo('stockList');
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

        vm.loadStock();
    }
})
();
