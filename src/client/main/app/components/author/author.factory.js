(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('AuthorFactory', ['$http', '$q', AuthorFactory]);

    function AuthorFactory($http, $q) {

        var url = "http://localhost:3000/authors/";
        var authors = [];
        var author = '';

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                authors = response.data;
            });
            return d.promise;
        }

        function remove(id) {
            $http.delete(url + id)
                .success(function (result) {
                    console.log(result);
                    list();
                }).error(function () {
                    console.log("error");
                });
        }

        function create(author) {
            $http.post(url, author)
                .success(function (result) {
                    console.log(result);
                }).error(function () {
                    console.log("error");
                });
            list();
        }

        function update(author) {
            $http.put(url + author.id, author)
                .success(function (result) {
                    console.log(result);
                }).error(function () {
                    console.log("error");
                });
            list();
        }

        function getById(id) {
            //TODO melhorar esta funcionalidade
            var authorFound = '';
            authors.forEach(function (author) {
                if (author.id == id) {
                    authorFound = author;
                }
            });
            return authorFound;
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