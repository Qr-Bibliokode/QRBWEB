(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingCreateController', ['LendingFactory', 'MessageFactory', LendingCreateController]);

    /** @ngInject */
    function LendingCreateController(LendingFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            LendingFactory.create(vm.lending).then(function () {
                MessageFactory.success('Empréstimo ' + vm.lending.id + ' realizado com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.lending = '';
        };
    }
})();