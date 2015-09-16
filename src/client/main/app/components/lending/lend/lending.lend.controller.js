(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingLendController', ['LendingFactory', 'MessageFactory', 'BookFactory', 'UserAccountFactory', LendingLendController]);

    /** @ngInject */
    function LendingLendController(LendingFactory, MessageFactory, BookFactory, UserAccountFactory) {
        var vm = this;

        vm.lend = function () {
            LendingFactory.lend(vm.lending).then(function () {
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