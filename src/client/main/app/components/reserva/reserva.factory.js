(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('ReservaFactory', ['$http', '$q', 'ResourcesFactory', ReservaFactory]);

    function ReservaFactory($http, $q, ResourcesFactory) {

        var reservas = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.RESERVA_API).then(function (response, $q) {
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
            $http.delete(ResourcesFactory.RESERVA_API + id).then(function (response, $q) {
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
            $http.post(ResourcesFactory.RESERVA_API, reserva).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(reserva) {
            var d = $q.defer();
            $http.put(ResourcesFactory.RESERVA_API + reserva.id, reserva).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.RESERVA_API + id).then(function (response, $q) {
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