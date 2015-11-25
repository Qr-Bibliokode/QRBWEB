(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('EmprestimoFactory', ['$http', '$q', 'ResourcesFactory', EmprestimoFactory]);

    function EmprestimoFactory($http, $q, ResourcesFactory) {

        var emprestimos = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.EMPRESTIMO_API).then(function (response, $q) {
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
            $http.delete(ResourcesFactory.EMPRESTIMO_API + id).then(function (response, $q) {
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
            $http.post(ResourcesFactory.EMPRESTIMO_API + "emprestar/", emprestimo).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function devolver(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.EMPRESTIMO_API + "devolver/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(emprestimo) {
            var d = $q.defer();
            $http.put(ResourcesFactory.EMPRESTIMO_API + emprestimo.id, emprestimo).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function renovar(emprestimo) {
            var d = $q.defer();
            $http.get(ResourcesFactory.EMPRESTIMO_API + "renovar/" + emprestimo.id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function liberar(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.EMPRESTIMO_API + "liberar/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function obtenhaHistoricoEmprestimosPorLivro(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.EMPRESTIMO_API + "obtenhaHistoricoEmprestimosPorLivro/" + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.EMPRESTIMO_API + id).then(function (response, $q) {
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