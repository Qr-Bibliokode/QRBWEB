(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('ContaUsuarioFactory', ['$http', '$q', 'ResourcesFactory', ContaUsuarioFactory]);

    function ContaUsuarioFactory($http, $q, ResourcesFactory) {

        var contaUsuarios = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.CONTAUSUARIO_API).then(function (response, $q) {
                    d.resolve(response);
                    contaUsuarios = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            return $http.delete(ResourcesFactory.CONTAUSUARIO_API + id);
        }

        function create(contaUsuario) {
            return $http.post(ResourcesFactory.CONTAUSUARIO_API, contaUsuario);
        }

        function update(contaUsuario) {
            return $http.put(ResourcesFactory.CONTAUSUARIO_API + contaUsuario.id, contaUsuario);
        }

        function getById(id) {
            return $http.get(ResourcesFactory.CONTAUSUARIO_API + id);
        }

        function get() {
            return contaUsuarios;
        }

        function verificarMultas(id) {
            return $http.get(ResourcesFactory.CONTAUSUARIO_API + "verificarMultas/" + id);
        }

        function pagarMulta(id) {
            return $http.get(ResourcesFactory.CONTAUSUARIO_API + "pagarMulta/" + id);
        }

        function bloquearContaUsuario(id) {
            return $http.get(ResourcesFactory.CONTAUSUARIO_API + "bloquearContaUsuario/" + id);
        }

        function habilitarContaUsuario(id) {
            return $http.get(ResourcesFactory.CONTAUSUARIO_API + "habilitarContaUsuario/" + id);
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