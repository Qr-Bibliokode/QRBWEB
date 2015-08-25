(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorEditController', ['AuthorFactory', '$stateParams', '$state', AuthorEditController]);

    /** @ngInject */
    function AuthorEditController(AuthorFactory, $stateParams, $state) {
        var vm = this;

        vm.author = '';

        vm.update = function () {
            AuthorFactory.update(vm.author);
            vm.clear();
            $state.transitionTo('authorList');
        };

        vm.loadAuthor = function () {
            vm.author = AuthorFactory.getById($stateParams.id)
        };

        vm.clear = function () {
            vm.author = null;
        };

        vm.loadAuthor();
    }
})
();
