(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('HolidayFactory', ['$http', '$q', HolidayFactory]);

    function HolidayFactory($http, $q) {

        var url = "http://localhost:3000/holidays/";
        var holidays = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                holidays = response.data;
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

        function create(holiday) {
            var d = $q.defer();
            $http.post(url, holiday).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(holiday) {
            var d = $q.defer();
            $http.put(url + holiday.id, holiday).then(function (response, $q) {
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
            return holidays;
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