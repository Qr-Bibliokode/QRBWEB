(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('BookCreateController', ['AuthorFactory', 'BookFactory', 'IdiomFactory', 'CategoryFactory', BookCreateController]);

    /** @ngInject */
    function BookCreateController(AuthorFactory, BookFactory, IdiomFactory, CategoryFactory) {
        var vm = this;

        vm.create = function () {
            BookFactory.create(vm.book).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.book.authors = '';
            vm.book = '';
            console.log(vm.book.authors)
        };

        vm.loadAuthors = function () {
            AuthorFactory.list();
        };

        vm.getAuthors = function () {
            return AuthorFactory.get();
        };

        vm.loadCategories = function () {
            CategoryFactory.list();
        };

        vm.getCategories = function () {
            return CategoryFactory.get();
        };

        vm.loadIdioms = function () {
            IdiomFactory.list();
        };

        vm.getIdioms = function () {
            return IdiomFactory.get();
        };
    }
})();