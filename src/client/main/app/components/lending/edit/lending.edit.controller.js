(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingEditController', ['LendingFactory', '$stateParams', '$state', LendingEditController]);

    /** @ngInject */
    function LendingEditController(LendingFactory, $stateParams, $state) {
        var vm = this;

        vm.lending = '';

        vm.update = function () {
            LendingFactory.update(vm.lending).then(function () {
                vm.clear();
                $state.transitionTo('lendingList');
            });
        };

        vm.loadLending = function () {
            LendingFactory.getById($stateParams.id).then(function (result) {
                vm.lending = result.data;
            });
        };

        vm.clear = function () {
            vm.lending = '';
        };

        vm.loadLending();
    }
})
();
