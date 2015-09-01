(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('BookFactory', ['$http', '$q', BookFactory]);

    function BookFactory($http, $q) {

        var url = "http://localhost:3000/books/";
        var books = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                books = response.data;
            });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(url + id).then(function (response, $q) {
                d.resolve(response);
                list();
            });
            return d.promise;
        }

        function create(book) {
            var d = $q.defer();
            $http.post(url, book).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(book) {
            var d = $q.defer();
            $http.put(url + book.id, book).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(url + id).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function get() {
            return books;
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