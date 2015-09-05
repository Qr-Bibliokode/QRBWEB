(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('UserAccountCreateController', ['UserAccountFactory', 'MessageFactory', UserAccountCreateController]);

    /** @ngInject */
    function UserAccountCreateController(UserAccountFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            UserAccountFactory.create(vm.userAccount).then(function () {
                MessageFactory.success('Criada conta com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.userAccount = '';
        };
    }
})();