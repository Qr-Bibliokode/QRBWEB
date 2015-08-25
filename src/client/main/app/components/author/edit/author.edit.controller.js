(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorEditController', ['AuthorFactory', '$stateParams', '$state', AuthorEditController]);

    /** @ngInject */
    function AuthorEditController(AuthorFactory, $stateParams, $state) {
        var vm = this;

        vm.author = '';

        vm.create = function () {
            if (vm.author.id) {
                AuthorFactory.update(vm.author);
            }
            vm.clear();
            vm.list();
            $state.transitionTo('authorList');
        };

        vm.loadAuthor = function () {
            vm.author = AuthorFactory.getById($stateParams.id)
        };

        vm.loadAuthor();

        vm.list = function () {
            return AuthorFactory.list();
        };

        vm.clear = function () {
            vm.author = null;
        };
    }
})
();
