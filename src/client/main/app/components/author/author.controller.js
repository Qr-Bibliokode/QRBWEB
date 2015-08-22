(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorController', ['AuthorFactory', AuthorController]);

    /** @ngInject */
    function AuthorController(AuthorFactory) {
        var vm = this;
        vm.author = '';

        vm.list = function () {
            AuthorFactory.list();
        };

        vm.getAuthors = function () {
            return AuthorFactory.get();
        };

        vm.remove = function (id) {
            AuthorFactory.remove(id);
        };

        vm.create = function () {
            if (vm.author.id) {
                AuthorFactory.update(vm.author);
            } else {
                AuthorFactory.create(vm.author);
            }
            vm.clear();
            vm.list();
        };

        vm.edit = function (author) {
            vm.author = author;
        };

        vm.clear = function () {
            vm.author = '';
        };

        vm.init = vm.list()
    }
})();