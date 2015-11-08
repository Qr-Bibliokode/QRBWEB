(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LoginController', ['LoginFactory', '$window', LoginController]);

    /** @ngInject */
    function LoginController(LoginFactory, $window) {

        var vm = this;
        vm.user = '';

        vm.login = function () {
            LoginFactory.validaUsuario(vm.user).then(function (result) {
                LoginFactory.login(result.data).then(function () {
                    $window.location.href = '/';
                }, function () {
                    $window.location.href = '/';
                });
            }, function (response) {
                console.log(response)
            });
        };

        vm.logout = function () {
            LoginFactory.logout().then(function (data) {
            }, function (response) {
                console.log(response.data);
            });
        };

        vm.clear = function () {
            vm.user = '';
        };
    }
})();