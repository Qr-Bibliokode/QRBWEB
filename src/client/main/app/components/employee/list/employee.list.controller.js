(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmployeeListController', ['EmployeeFactory', '$scope', 'MessageFactory', EmployeeListController]);

    /** @ngInject */
    function EmployeeListController(EmployeeFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return EmployeeFactory.list();
        };

        vm.getEmployees = function () {
            return EmployeeFactory.get();
        };

        vm.remove = function (id) {
            EmployeeFactory.remove(id).then(function () {
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
