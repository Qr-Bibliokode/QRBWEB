(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('EstudanteFactory', ['$http', '$q', 'ResourcesFactory', EstudanteFactory]);

    function EstudanteFactory($http, $q, ResourcesFactory) {

        var estudantes = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.ESTUDANTE_API).then(function (response, $q) {
                    d.resolve(response);
                    estudantes = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.ESTUDANTE_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(estudante) {
            var d = $q.defer();
            $http.post(ResourcesFactory.ESTUDANTE_API, estudante).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(estudante) {
            var d = $q.defer();
            $http.put(ResourcesFactory.ESTUDANTE_API + estudante.id, estudante).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.ESTUDANTE_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return estudantes;
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