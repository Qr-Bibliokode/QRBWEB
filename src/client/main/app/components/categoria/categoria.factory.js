(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('CategoriaFactory', ['$http', '$q', 'ResourcesFactory', CategoriaFactory]);

    function CategoriaFactory($http, $q, ResourcesFactory) {

        var categorias = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.CATEGORIA_API).then(function (response, $q) {
                    d.resolve(response);
                    categorias = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.CATEGORIA_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(categoria) {
            var d = $q.defer();
            $http.post(ResourcesFactory.CATEGORIA_API, categoria).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(categoria) {
            var d = $q.defer();
            $http.put(ResourcesFactory.CATEGORIA_API + categoria.id, categoria).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.CATEGORIA_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return categorias;
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