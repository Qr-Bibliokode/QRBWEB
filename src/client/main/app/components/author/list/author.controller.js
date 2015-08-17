(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorController', ['AuthorFactory', AuthorController]);

    /** @ngInject */
    function AuthorController(AuthorFactory) {
        var vm = this;

        var list = function () {
            AuthorFactory.list();
        };

        vm.getAuthors = function () {
            return AuthorFactory.get();
        };

        vm.init = list()
    }
})();