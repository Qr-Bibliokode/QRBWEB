(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StockListController', ['StockFactory', '$scope', 'MessageFactory', StockListController]);

    /** @ngInject */
    function StockListController(StockFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
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
            StockFactory.remove(id).then(function () {
                MessageFactory.success('Stock deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este stock');
            });
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
