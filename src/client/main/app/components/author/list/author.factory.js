(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('AuthorFactory', ['$http', AuthorFactory]);

    function AuthorFactory($http) {

        var authors = [];

        function list() {
            $http.get("http://localhost:3000/authors").then(function (response) {
                authors = response.data;
            });
        }

        function remove(id) {
            $http.delete("http://localhost:3000/authors/" + id)
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
            delete: remove,
            get: get
        };
    }
})();