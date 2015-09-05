(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockCreateController', ['StockFactory', 'BookFactory', 'MessageFactory', StockCreateController]);

    /** @ngInject */
    function StockCreateController(StockFactory, BookFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            StockFactory.create(vm.stock).then(function () {
                MessageFactory.success('Inserido livro no estoque com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
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