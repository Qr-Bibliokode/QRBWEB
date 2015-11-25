(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('LoginFactory', ['$http', '$q', 'ResourcesFactory', LoginFactory]);

    function LoginFactory($http, $q, ResourcesFactory) {

        function login(usuario) {
            var d = $q.defer();
            $http.post(ResourcesFactory.DOMAIN_SERVER + "login", usuario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function logout() {
            var d = $q.defer();
            $http.get(ResourcesFactory.DOMAIN_SERVER + "logout").then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }


        function validaUsuario(user) {
            var d = $q.defer();
            $http.get(ResourcesFactory.CONTAUSUARIO_API + "validaUsuario/" + user.username + "/" + user.password).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        return {
            login: login,
            validaUsuario: validaUsuario
        };
    }
})();