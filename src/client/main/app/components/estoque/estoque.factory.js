(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('EstoqueFactory', ['$http', '$q', 'ResourcesFactory', EstoqueFactory]);

    function EstoqueFactory($http, $q, ResourcesFactory) {

        var estoque = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.ESTOQUE_API).then(function (response, $q) {
                    d.resolve(response);
                    estoque = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.ESTOQUE_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(estoque) {
            var d = $q.defer();
            $http.post(ResourcesFactory.ESTOQUE_API, estoque).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(estoque) {
            var d = $q.defer();
            $http.put(ResourcesFactory.ESTOQUE_API + estoque.id, estoque).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.ESTOQUE_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return estoque;
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