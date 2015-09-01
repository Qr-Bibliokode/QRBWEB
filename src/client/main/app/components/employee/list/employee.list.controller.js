(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmployeeListController', ['EmployeeFactory', '$scope', EmployeeListController]);

    /** @ngInject */
    function EmployeeListController(EmployeeFactory, $scope) {
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
            EmployeeFactory.remove(id);
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
