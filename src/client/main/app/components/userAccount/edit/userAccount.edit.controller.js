(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('UserAccountEditController', ['UserAccountFactory', '$stateParams', '$state', 'MessageFactory', UserAccountEditController]);

    /** @ngInject */
    function UserAccountEditController(UserAccountFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.userAccount = '';

        vm.update = function () {
            UserAccountFactory.update(vm.userAccount).then(function () {
                MessageFactory.success('Conta editada com sucesso.');
                $state.transitionTo('userAccountList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadUserAccount = function () {
            UserAccountFactory.getById($stateParams.id).then(function (result) {
                vm.userAccount = result.data;
            });
        };

        vm.clear = function () {
            vm.userAccount = '';
        };

        vm.loadUserAccount();
    }
})
();
