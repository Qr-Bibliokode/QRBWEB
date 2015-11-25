(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('FuncionarioFactory', ['$http', '$q', 'ResourcesFactory', FuncionarioFactory]);

    function FuncionarioFactory($http, $q, ResourcesFactory) {

        var funcionarios = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.FUNCIONARIO_API).then(function (response, $q) {
                    d.resolve(response);
                    funcionarios = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.FUNCIONARIO_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(funcionario) {
            var d = $q.defer();
            $http.post(ResourcesFactory.FUNCIONARIO_API, funcionario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(funcionario) {
            var d = $q.defer();
            $http.put(ResourcesFactory.FUNCIONARIO_API + funcionario.id, funcionario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.FUNCIONARIO_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return funcionarios;
        }

        return {
            list: list,
            remove: remove,
            create: create,
            get: get,
            getById: getById,
            update: update
        };
    }
})();