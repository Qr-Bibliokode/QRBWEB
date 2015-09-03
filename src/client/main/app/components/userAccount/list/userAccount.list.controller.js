(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('UserAccountListController', ['UserAccountFactory', '$scope', UserAccountListController]);

    /** @ngInject */
    function UserAccountListController(UserAccountFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return UserAccountFactory.list();
        };

        vm.getUserAccounts = function () {
            return UserAccountFactory.get();
        };

        vm.remove = function (id) {
            UserAccountFactory.remove(id);
        };

        vm.onorderchange = function () {
            return vm.list();
        };

        vm.onpagechange = function () {
            return vm.list();
        };

        vm.init = vm.list();
    }
})();
