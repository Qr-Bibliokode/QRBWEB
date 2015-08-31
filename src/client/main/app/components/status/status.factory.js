(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('StatusFactory', ['$http', '$q', StatusFactory]);

    function StatusFactory($http, $q) {

        var url = "http://localhost:3000/status/";
        var status = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                status = response.data;
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

        function create(status) {
            var d = $q.defer();
            $http.post(url, status).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(status) {
            var d = $q.defer();
            $http.put(url + status.id, status).then(function (response, $q) {
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
            return status;
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