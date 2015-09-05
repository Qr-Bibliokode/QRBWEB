(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('AuthorFactory', ['$http', '$q', AuthorFactory]);

    function AuthorFactory($http, $q) {

        var url = "http://localhost:3000/authors/";
        var authors = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                    d.resolve(response);
                    authors = response.data;
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

        function create(author) {
            var d = $q.defer();
            $http.post(url, author).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(author) {
            var d = $q.defer();
            $http.put(url + author.id, author).then(function (response, $q) {
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
            return authors;
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