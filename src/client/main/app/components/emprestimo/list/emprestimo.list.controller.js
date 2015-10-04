(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmprestimoListController', ['EmprestimoFactory', '$scope', 'MessageFactory', EmprestimoListController]);

    /** @ngInject */
    function EmprestimoListController(EmprestimoFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return EmprestimoFactory.list();
        };

        vm.getEmprestimos = function () {
            return EmprestimoFactory.get();
        };

        vm.remove = function (id) {
            EmprestimoFactory.remove(id).then(function () {
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