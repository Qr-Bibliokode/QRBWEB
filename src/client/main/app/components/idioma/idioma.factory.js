(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('IdiomaFactory', ['$http', '$q', 'ResourcesFactory', IdiomaFactory]);

    function IdiomaFactory($http, $q, ResourcesFactory) {

        var idiomas = [];

        function list() {
            var d = $q.defer();
            $http.get(ResourcesFactory.IDIOMA_API).then(function (response, $q) {
                    d.resolve(response);
                    idiomas = response.data;
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function remove(id) {
            var d = $q.defer();
            $http.delete(ResourcesFactory.IDIOMA_API + id).then(function (response, $q) {
                    d.resolve(response);
                    list();
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function create(idioma) {
            var d = $q.defer();
            $http.post(ResourcesFactory.IDIOMA_API, idioma).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function update(idioma) {
            var d = $q.defer();
            $http.put(ResourcesFactory.IDIOMA_API + idioma.id, idioma).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            $http.get(ResourcesFactory.IDIOMA_API + id).then(function (response, $q) {
                    d.resolve(response);
                },
                function (data) {
                    d.reject(data);
                });
            return d.promise;
        }

        function get() {
            return idiomas;
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