(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LoginController', ['LoginFactory', LoginController]);

    /** @ngInject */
    function LoginController(LoginFactory) {
        var vm = this;

        vm.login = function () {
            LoginFactory.login(vm.user).then(function (data) {
                vm.clear();
                console.log(data)
            }, function (response) {
                console.log(response.data);
            });
        };

        vm.clear = function () {
            vm.user = '';
        };
    }
})();