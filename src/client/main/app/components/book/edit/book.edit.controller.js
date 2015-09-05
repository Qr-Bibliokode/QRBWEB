(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('BookEditController', ['AuthorFactory', 'BookFactory', '$stateParams', '$state', 'IdiomFactory', 'CategoryFactory', 'MessageFactory', BookEditController]);

    /** @ngInject */
    function BookEditController(AuthorFactory, BookFactory, $stateParams, $state, IdiomFactory, CategoryFactory, MessageFactory) {
        var vm = this;

        vm.book = '';

        vm.update = function () {
            BookFactory.update(vm.book).then(function () {
                MessageFactory.success('Livro ' + vm.book.title + ' editado com sucesso.');
                vm.clear();
                $state.transitionTo('bookList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
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
})
();
