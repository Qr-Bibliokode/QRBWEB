(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmpregadoListController', ['EmpregadoFactory', '$scope', 'MessageFactory', EmpregadoListController]);

    /** @ngInject */
    function EmpregadoListController(EmpregadoFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return EmpregadoFactory.list();
        };

        vm.getEmpregados = function () {
            return EmpregadoFactory.get();
        };

        vm.remove = function (id) {
            EmpregadoFactory.remove(id).then(function () {
                MessageFactory.success('Empregado deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este empregado');
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
