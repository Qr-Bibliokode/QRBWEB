(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('AuthorFactory', ['$http', AuthorFactory]);

    function AuthorFactory($http) {

        var url = "http://localhost:3000/authors/";
        var authors = [];

        function list() {
            $http.get(url).then(function (response) {
                authors = response.data;
            });
        }

        function remove(id) {
            $http.delete(url + id)
                .success(function (result) {
                    console.log(result);
                }).error(function () {
                    console.log("error");
                });
            list();
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

        function get() {
            return authors;
        }

        return {
            list: list,
            remove: remove,
            create: create,
            get: get,
            update: update
        };
    }
})();