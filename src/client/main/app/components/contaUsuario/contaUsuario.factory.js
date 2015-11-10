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
            return $http.delete(url + id);
        }

        function create(contaUsuario) {
            return $http.post(url, contaUsuario);
        }

        function update(contaUsuario) {
            return $http.put(url + contaUsuario.id, contaUsuario);
        }

        function getById(id) {
            return $http.get(url + id);
        }

        function get() {
            return contaUsuarios;
        }

        function verificarMultas(id) {
            return $http.get(url + "verificarMultas/" + id);
        }

        function pagarMulta(id) {
            return $http.get(url + "pagarMulta/" + id);
        }

        function bloquearContaUsuario(id) {
            return $http.get(url + "bloquearContaUsuario/" + id);
        }

        function habilitarContaUsuario(id) {
            return $http.get(url + "habilitarContaUsuario/" + id);
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