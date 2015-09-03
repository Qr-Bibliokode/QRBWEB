(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingCreateController', ['LendingFactory', LendingCreateController]);

    /** @ngInject */
    function LendingCreateController(LendingFactory) {
        var vm = this;

        vm.create = function () {
            LendingFactory.create(vm.lending).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.lending = '';
        };
    }
})();