(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('LivroFactory', ['$http', '$q', 'ResourcesFactory', LivroFactory]);

    function LivroFactory($http, $q, ResourcesFactory) {

        var livros = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.LIVRO_API).then(function (response, $q) {
                    d.resolve(response);
                    livros = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.LIVRO_API + id).then(function (response, $q) {
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
            $http.post(ResourcesFactory.LIVRO_API, estoque).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(livro) {
            var d = $q.defer();
            $http.put(ResourcesFactory.LIVRO_API + livro.id, livro).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.LIVRO_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return livros;
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