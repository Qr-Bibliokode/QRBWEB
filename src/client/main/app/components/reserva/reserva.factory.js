(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('ReservaFactory', ['$http', '$q', ReservaFactory]);

    function ReservaFactory($http, $q) {

        var url = "http://localhost:3000/reservas/";
        var reservas = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                    d.resolve(response);
                    reservas = response.data;
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

        function create(reserva) {
            var d = $q.defer();
            $http.post(url, reserva).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(reserva) {
            var d = $q.defer();
            $http.put(url + reserva.id, reserva).then(function (response, $q) {
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
            return reservas;
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