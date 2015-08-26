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
            AuthorFactory.update(vm.author).then(function () {
                vm.clear();
            });
            $state.transitionTo('authorList');
        };

        vm.loadAuthor = function () {
            AuthorFactory.getById($stateParams.id).then(function (result) {
                vm.author = result.data;
            });
        };

        vm.clear = function () {
            vm.author = '';
        };

        vm.loadAuthor();
    }
})
();
