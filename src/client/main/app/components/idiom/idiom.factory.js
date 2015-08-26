(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('IdiomFactory', ['$http', '$q', IdiomFactory]);

    function IdiomFactory($http, $q) {

        var url = "http://localhost:3000/idioms/";
        var idioms = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                idioms = response.data;
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

        function create(idiom) {
            var d = $q.defer();
            $http.post(url, idiom).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(idiom) {
            var d = $q.defer();
            $http.put(url + idiom.id, idiom).then(function (response, $q) {
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
            return idioms;
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