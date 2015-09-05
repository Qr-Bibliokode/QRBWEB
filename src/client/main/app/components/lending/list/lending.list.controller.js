(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingListController', ['LendingFactory', '$scope', 'MessageFactory', LendingListController]);

    /** @ngInject */
    function LendingListController(LendingFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return LendingFactory.list();
        };

        vm.getLendings = function () {
            return LendingFactory.get();
        };

        vm.remove = function (id) {
            LendingFactory.remove(id).then(function () {
                MessageFactory.success('Empréstimo deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este emprestimo');
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
