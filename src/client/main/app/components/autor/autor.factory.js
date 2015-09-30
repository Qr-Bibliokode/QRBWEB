(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('AutorFactory', ['$http', '$q', AutorFactory]);

    function AutorFactory($http, $q) {

        var url = "http://localhost:3000/autores/";
        var autores = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
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
            $http.delete(url + id).then(function (response, $q) {
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
            $http.post(url, autor).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(autor) {
            var d = $q.defer();
            $http.put(url + autor.id, autor).then(function (response, $q) {
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