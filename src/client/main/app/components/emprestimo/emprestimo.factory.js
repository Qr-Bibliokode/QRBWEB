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
            $http.post(url + "emprestar/", emprestimo).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function devolver(id) {
            var d = $q.defer();
            $http.get(url + "devolver/" + id).then(function (response, $q) {
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

        function renovar(emprestimo) {
            var d = $q.defer();
            $http.get(url + "renovar/" + emprestimo.id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function liberar(id) {
            var d = $q.defer();
            $http.get(url + "liberar/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function obtenhaHistoricoEmprestimosPorLivro(id) {
            var d = $q.defer();
            $http.get(url + "obtenhaHistoricoEmprestimosPorLivro/" + id).then(function (response, $q) {
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
            renovar: renovar,
            liberar: liberar,
            devolver: devolver,
            obtenhaHistoricoEmprestimosPorLivro: obtenhaHistoricoEmprestimosPorLivro,
            get: get,
            getById: getById,
            update: update
        };
    }
})();