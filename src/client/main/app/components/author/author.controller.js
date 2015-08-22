(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorController', ['AuthorFactory', AuthorController]);

    /** @ngInject */
    function AuthorController(AuthorFactory) {
        var vm = this;
        vm.author = '';

        var list = function () {
            AuthorFactory.list();
        };

        vm.getAuthors = function () {
            return AuthorFactory.get();
        };

        vm.remove = function (id) {
            AuthorFactory.remove(id);
        };

        vm.create = function () {
            AuthorFactory.create(vm.author);

        };

        vm.init = list()
    }
})();