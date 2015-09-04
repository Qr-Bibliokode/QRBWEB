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
            AuthorFactory.update(vm.author).then(function (response) {
                if (response.data.errors) {
                    MessageFactory.show('error', response.data.errors[0].message);
                } else {
                    MessageFactory.show('success', 'Author ' + vm.author.name + ' editado com sucesso.');
                    vm.clear();
                    $state.transitionTo('authorList');
                }
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
