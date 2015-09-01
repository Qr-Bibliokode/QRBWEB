(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('BookListController', ['BookFactory', '$scope', BookListController]);

    /** @ngInject */
    function BookListController(BookFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return BookFactory.list();
        };

        vm.getBooks = function () {
            return BookFactory.get();
        };

        vm.remove = function (id) {
            BookFactory.remove(id);
        };

        vm.onorderchange = function () {
            return vm.list();
        };

        vm.onpagechange = function () {
            return vm.list();
        };

        vm.init = vm.list();
    }
})();
