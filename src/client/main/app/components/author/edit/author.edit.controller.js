(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorEditController', ['AuthorFactory', '$stateParams', '$state', 'MessageFactory', AuthorEditController]);

    /** @ngInject */
    function AuthorEditController(AuthorFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.author = '';

        vm.update = function () {
            AuthorFactory.update(vm.author).then(function () {
                MessageFactory.success('Author ' + vm.author.name + ' salvo com sucesso.');
                vm.clear();
                $state.transitionTo('authorList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
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
