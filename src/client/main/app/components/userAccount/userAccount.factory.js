(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('UserAccountFactory', ['$http', '$q', UserAccountFactory]);

    function UserAccountFactory($http, $q) {

        var url = "http://localhost:3000/userAccounts/";
        var userAccounts = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                userAccounts = response.data;
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

        function create(userAccount) {
            var d = $q.defer();
            $http.post(url, userAccount).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(userAccount) {
            var d = $q.defer();
            $http.put(url + userAccount.id, userAccount).then(function (response, $q) {
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
            return userAccounts;
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