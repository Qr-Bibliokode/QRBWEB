(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingEditController', ['LendingFactory', '$stateParams', '$state', 'MessageFactory', LendingEditController]);

    /** @ngInject */
    function LendingEditController(LendingFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.lending = '';

        vm.update = function () {
            LendingFactory.update(vm.lending).then(function () {
                MessageFactory.success('Empréstimo ' + vm.lending.id + ' editado com sucesso.');
                $state.transitionTo('lendingList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
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
