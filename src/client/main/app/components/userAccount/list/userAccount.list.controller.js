(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('UserAccountListController', ['UserAccountFactory', '$scope', 'MessageFactory', UserAccountListController]);

    /** @ngInject */
    function UserAccountListController(UserAccountFactory, $scope, MessageFactory) {
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
            UserAccountFactory.remove(id).then(function () {
                MessageFactory.success('Conta deletada com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este autor');
            });
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
