(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('AutorFactory', ['$http', '$q', 'ResourcesFactory', AutorFactory]);

    function AutorFactory($http, $q, ResourcesFactory) {

        var autores = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.AUTOR_API).then(function (response, $q) {
                    d.resolve(response);
                    autores = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.AUTOR_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function () {
                    d.reject();
                });
            return d.promise;
        }

        function create(autor) {
            var d = $q.defer();
            $http.post(ResourcesFactory.AUTOR_API, autor).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(autor) {
            var d = $q.defer();
            $http.put(ResourcesFactory.AUTOR_API + autor.id, autor).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.AUTOR_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return autores;
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