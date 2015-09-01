(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmployeeCreateController', ['EmployeeFactory', EmployeeCreateController]);

    /** @ngInject */
    function EmployeeCreateController(EmployeeFactory) {
        var vm = this;

        vm.create = function () {
            EmployeeFactory.create(vm.employee).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.employee = '';
        };
    }
})();