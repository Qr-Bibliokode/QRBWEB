(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('UserAccountCreateController', ['UserAccountFactory', UserAccountCreateController]);

    /** @ngInject */
    function UserAccountCreateController(UserAccountFactory) {
        var vm = this;

        vm.create = function () {
            UserAccountFactory.create(vm.userAccount).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.userAccount = '';
        };
    }
})();