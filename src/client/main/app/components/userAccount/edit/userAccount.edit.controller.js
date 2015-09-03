(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('UserAccountEditController', ['UserAccountFactory', '$stateParams', '$state', UserAccountEditController]);

    /** @ngInject */
    function UserAccountEditController(UserAccountFactory, $stateParams, $state) {
        var vm = this;

        vm.userAccount = '';

        vm.update = function () {
            UserAccountFactory.update(vm.userAccount).then(function () {
                vm.clear();
                $state.transitionTo('userAccountList');
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
