(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('ComentarioFactory', ['$http', '$q', 'ResourcesFactory', ComentarioFactory]);

    function ComentarioFactory($http, $q, ResourcesFactory) {

        var comentarios = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.COMENTARIO_API).then(function (response, $q) {
                    d.resolve(response);
                    comentarios = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.COMENTARIO_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(comentario) {
            var d = $q.defer();
            $http.post(ResourcesFactory.COMENTARIO_API, comentario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(comentario) {
            var d = $q.defer();
            $http.put(ResourcesFactory.COMENTARIO_API + comentario.id, comentario).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.COMENTARIO_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return comentarios;
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