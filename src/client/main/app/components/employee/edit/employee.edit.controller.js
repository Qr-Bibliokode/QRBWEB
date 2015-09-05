(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmployeeEditController', ['EmployeeFactory', '$stateParams', '$state', 'MessageFactory', EmployeeEditController]);

    /** @ngInject */
    function EmployeeEditController(EmployeeFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.employee = '';

        vm.update = function () {
            EmployeeFactory.update(vm.employee).then(function () {
                MessageFactory.success('Empregado ' + vm.employee.name + ' editado com sucesso.');
                vm.clear();
                $state.transitionTo('employeeList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
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
