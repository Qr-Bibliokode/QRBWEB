(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('FuncionarioListController', ['FuncionarioFactory', '$scope', 'MessageFactory', FuncionarioListController]);

    /** @ngInject */
    function FuncionarioListController(FuncionarioFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return FuncionarioFactory.list();
        };

        vm.getFuncionarios = function () {
            return FuncionarioFactory.get();
        };

        vm.remove = function (id) {
            FuncionarioFactory.remove(id).then(function () {
                MessageFactory.success('Funcionario deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este funcionario');
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
