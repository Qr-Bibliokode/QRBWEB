(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StudentCreateController', ['StudentFactory', StudentCreateController]);

    /** @ngInject */
    function StudentCreateController(StudentFactory) {
        var vm = this;

        vm.create = function () {
            StudentFactory.create(vm.student).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.student = '';
        };
    }
})();