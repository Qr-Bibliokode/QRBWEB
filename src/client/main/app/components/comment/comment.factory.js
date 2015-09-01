(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('CommentFactory', ['$http', '$q', CommentFactory]);

    function CommentFactory($http, $q) {

        var url = "http://localhost:3000/comments/";
        var comments = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                comments = response.data;
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

        function create(comment) {
            var d = $q.defer();
            $http.post(url, comment).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(comment) {
            var d = $q.defer();
            $http.put(url + comment.id, comment).then(function (response, $q) {
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
            return comments;
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