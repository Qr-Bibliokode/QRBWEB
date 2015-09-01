(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('BookCreateController', ['BookFactory', 'IdiomFactory', 'StatusFactory', 'CategoryFactory', BookCreateController]);

    /** @ngInject */
    function BookCreateController(BookFactory, IdiomFactory, StatusFactory, CategoryFactory) {
        var vm = this;

        vm.create = function () {
            BookFactory.create(vm.book).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.book = '';
        };

        vm.loadIdioms = function () {
            IdiomFactory.list();
        };

        vm.getIdioms = function () {
            return IdiomFactory.get();
        };


        vm.loadStatus = function () {
            StatusFactory.list();
        };

        vm.getStatus = function () {
            return StatusFactory.get();
        };

        vm.loadCategories = function () {
            CategoryFactory.list();
        };

        vm.getCategories = function () {
            return CategoryFactory.get();
        };
    }
})();