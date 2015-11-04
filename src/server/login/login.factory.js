(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('LoginFactory', ['$http', '$q', LoginFactory]);

    function LoginFactory($http, $q) {

        var url = "http://localhost:3000/login/";

        function login(usuario) {
            var d = $q.defer();
            $http.get(url + usuario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        return {
            login: login
        };
    }
})();