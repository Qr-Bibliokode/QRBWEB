(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('FeriadoFactory', ['$http', '$q', 'ResourcesFactory', FeriadoFactory]);

    function FeriadoFactory($http, $q, ResourcesFactory) {

        var feriados = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.FERIADO_API).then(function (response, $q) {
                    d.resolve(response);
                    feriados = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.FERIADO_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(feriado) {
            var d = $q.defer();
            $http.post(ResourcesFactory.FERIADO_API, feriado).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(feriado) {
            var d = $q.defer();
            $http.put(ResourcesFactory.FERIADO_API + feriado.id, feriado).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.FERIADO_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return feriados;
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