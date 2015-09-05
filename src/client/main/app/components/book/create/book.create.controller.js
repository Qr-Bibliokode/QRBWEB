(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('BookCreateController', ['AuthorFactory', 'BookFactory', 'IdiomFactory', 'CategoryFactory', 'MessageFactory', BookCreateController]);

    /** @ngInject */
    function BookCreateController(AuthorFactory, BookFactory, IdiomFactory, CategoryFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            BookFactory.create(vm.book).then(function () {
                MessageFactory.success('Livro ' + vm.book.title + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
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