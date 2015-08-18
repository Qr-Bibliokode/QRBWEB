(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('AuthorFactory', ['$http', AuthorFactory]);

    function AuthorFactory($http) {

        var authors = [];

        return {
            list: function () {
                $http.get("http://localhost:3000/authors")
                    .then(function (response) {
                        authors = response.data;
                    });
            },
            get: function () {
                return authors;
            }
        };
    }
})();