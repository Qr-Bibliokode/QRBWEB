(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('EmprestimoFactory', ['$http', '$q', EmprestimoFactory]);

    function EmprestimoFactory($http, $q) {

        var url = "http://localhost:3000/emprestimos/";
        var emprestimos = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                    d.resolve(response);
                    emprestimos = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(url + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function emprestar(emprestimo) {
            var d = $q.defer();
            $http.post(url, emprestimo).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function devolver(emprestimo) {
            var d = $q.defer();
            $http.post(url + "devolver/", emprestimo).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(emprestimo) {
            var d = $q.defer();
            $http.put(url + emprestimo.id, emprestimo).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(url + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return emprestimos;
        }

        return {
            list: list,
            remove: remove,
            emprestar: emprestar,
            get: get,
            getById: getById,
            update: update
        };
    }
})();