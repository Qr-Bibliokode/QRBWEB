(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('LoginFactory', ['$http', '$q', LoginFactory]);

    function LoginFactory($http, $q) {

        var url = "http://localhost:3000/";

        function login(usuario) {
            var d = $q.defer();
            $http.post(url + "login", usuario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function logout() {
            var d = $q.defer();
            $http.get(url + "logout").then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }


        function validaUsuario(user) {
            var d = $q.defer();
            $http.get(url + "contaUsuarios/validaUsuario/" + user.username + "/" + user.password).then(function (response, $q) {
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