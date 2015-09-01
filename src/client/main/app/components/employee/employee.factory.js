(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('EmployeeFactory', ['$http', '$q', EmployeeFactory]);

    function EmployeeFactory($http, $q) {

        var url = "http://localhost:3000/employees/";
        var employees = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                employees = response.data;
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

        function create(employee) {
            var d = $q.defer();
            $http.post(url, employee).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(employee) {
            var d = $q.defer();
            $http.put(url + employee.id, employee).then(function (response, $q) {
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
            return employees;
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