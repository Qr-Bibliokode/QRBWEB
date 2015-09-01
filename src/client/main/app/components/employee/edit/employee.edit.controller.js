(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmployeeEditController', ['EmployeeFactory', '$stateParams', '$state', EmployeeEditController]);

    /** @ngInject */
    function EmployeeEditController(EmployeeFactory, $stateParams, $state) {
        var vm = this;

        vm.employee = '';

        vm.update = function () {
            EmployeeFactory.update(vm.employee).then(function () {
                vm.clear();
                $state.transitionTo('employeeList');
            });
        };

        vm.loadEmployee = function () {
            EmployeeFactory.getById($stateParams.id).then(function (result) {
                vm.employee = result.data;
            });
        };

        vm.clear = function () {
            vm.employee = '';
        };

        vm.loadEmployee();
    }
})
();
