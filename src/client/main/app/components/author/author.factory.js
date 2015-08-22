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
                    list();
                }).error(function () {
                    console.log("error");
                });
        }

        function create(author) {
            $http.post(url, author)
                .success(function (result) {
                    console.log(result);
                    list();
                }).error(function () {
                    console.log("error");
                });
        }

        function get() {
            return authors;
        }

        return {
            list: list,
            remove: remove,
            create: create,
            get: get
        };
    }
})();