(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingCreateController', ['LendingFactory', 'MessageFactory', 'BookFactory', 'UserAccountFactory', LendingCreateController]);

    /** @ngInject */
    function LendingCreateController(LendingFactory, MessageFactory, BookFactory, UserAccountFactory) {
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

        vm.loadBooks = function () {
            BookFactory.list();
        };

        vm.getBooks = function () {
            return BookFactory.get();
        };

        vm.loadUserAccounts = function () {
            UserAccountFactory.list();
        };

        vm.getUserAccounts = function () {
            return UserAccountFactory.get();
        };
    }
})();