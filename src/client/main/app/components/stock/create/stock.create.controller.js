(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockCreateController', ['StockFactory', 'BookFactory', StockCreateController]);

    /** @ngInject */
    function StockCreateController(StockFactory, BookFactory) {
        var vm = this;

        vm.create = function () {
            StockFactory.create(vm.stock).then(function () {
                vm.clear();
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
    }
})();