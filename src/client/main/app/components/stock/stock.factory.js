(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('StockFactory', ['$http', '$q', StockFactory]);

    function StockFactory($http, $q) {

        var url = "http://localhost:3000/stock/";
        var stock = [];

        function list() {
            var d = $q.defer();
            $http.get(url).then(function (response, $q) {
                d.resolve(response);
                stock = response.data;
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

        function create(stock) {
            var d = $q.defer();
            $http.post(url, stock).then(function (response, $q) {
                d.resolve(response);
            });
            return d.promise;
        }

        function update(stock) {
            var d = $q.defer();
            $http.put(url + stock.id, stock).then(function (response, $q) {
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
            return stock;
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