(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmployeeCreateController', ['EmployeeFactory', 'MessageFactory', EmployeeCreateController]);

    /** @ngInject */
    function EmployeeCreateController(EmployeeFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            EmployeeFactory.create(vm.employee).then(function () {
                MessageFactory.success('Empregado ' + vm.employee.name + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.employee = '';
        };
    }
})();