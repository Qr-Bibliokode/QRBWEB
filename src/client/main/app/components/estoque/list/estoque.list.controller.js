(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EstoqueListController', ['EstoqueFactory', '$scope', 'MessageFactory', EstoqueListController]);

    /** @ngInject */
    function EstoqueListController(EstoqueFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return EstoqueFactory.list();
        };

        vm.getEstoque = function () {
            return EstoqueFactory.get();
        };

        vm.remove = function (id) {
            EstoqueFactory.remove(id).then(function () {
                MessageFactory.success('Estoque deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este estoque');
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
