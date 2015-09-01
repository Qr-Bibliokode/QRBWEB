(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('BookEditController', ['BookFactory', '$stateParams', '$state', 'IdiomFactory', 'StatusFactory', 'CategoryFactory', BookEditController]);

    /** @ngInject */
    function BookEditController(BookFactory, $stateParams, $state, IdiomFactory, StatusFactory, CategoryFactory) {
        var vm = this;

        vm.book = '';

        vm.update = function () {
            BookFactory.update(vm.book).then(function () {
                vm.clear();
                $state.transitionTo('bookList');
            });
        };

        vm.loadBook = function () {
            BookFactory.getById($stateParams.id).then(function (result) {
                vm.book = result.data;
            });
        };

        vm.clear = function () {
            vm.book = '';
        };

        vm.loadBook();

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
})
();
