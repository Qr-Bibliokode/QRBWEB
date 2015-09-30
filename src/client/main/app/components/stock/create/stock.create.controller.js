(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockCreateController', ['StockFactory', 'LivroFactory', 'MessageFactory', StockCreateController]);

    /** @ngInject */
    function StockCreateController(StockFactory, LivroFactory, MessageFactory) {
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

        vm.loadLivros = function () {
            LivroFactory.list();
        };

        vm.getLivros = function () {
            return LivroFactory.get();
        };
    }
})();