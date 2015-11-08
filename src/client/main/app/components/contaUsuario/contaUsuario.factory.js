(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('ContaUsuarioFactory', ['$http', '$q', ContaUsuarioFactory]);

    function ContaUsuarioFactory($http, $q) {

        var url = "http://localhost:3000/contaUsuarios/";
        var contaUsuarios = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                    d.resolve(response);
                    contaUsuarios = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(url + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(contaUsuario) {
            var d = $q.defer();
            $http.post(url, contaUsuario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(contaUsuario) {
            var d = $q.defer();
            $http.put(url + contaUsuario.id, contaUsuario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(url + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return contaUsuarios;
        }

        function verificarMultas(id) {
            var d = $q.defer();
            $http.get(url + "verificarMultas/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function pagarMulta(id) {
            var d = $q.defer();
            $http.get(url + "pagarMulta/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function bloquearContaUsuario(id) {
            var d = $q.defer();
            $http.get(url + "bloquearContaUsuario/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function habilitarContaUsuario(id) {
            var d = $q.defer();
            $http.get(url + "habilitarContaUsuario/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        return {
            list: list,
            remove: remove,
            create: create,
            get: get,
            getById: getById,
            update: update,
            verificarMultas: verificarMultas,
            pagarMulta: pagarMulta,
            bloquearContaUsuario: bloquearContaUsuario,
            habilitarContaUsuario: habilitarContaUsuario
        };
    }
})();