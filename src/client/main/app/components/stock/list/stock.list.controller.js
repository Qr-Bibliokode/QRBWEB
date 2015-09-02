(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockListController', ['StockFactory', '$scope', StockListController]);

    /** @ngInject */
    function StockListController(StockFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return StockFactory.list();
        };

        vm.getStock = function () {
            return StockFactory.get();
        };

        vm.remove = function (id) {
            StockFactory.remove(id);
        };

        vm.onorderchange = function () {
            return vm.list();
        };

        vm.onpagechange = function () {
            return vm.list();
        };

        vm.init = vm.list();
    }
})();
