(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorCreateController', ['AuthorFactory', 'MessageFactory', AuthorCreateController]);

    /** @ngInject */
    function AuthorCreateController(AuthorFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            AuthorFactory.create(vm.author).then(function (response) {
                if (response.data.errors) {
                    MessageFactory.show('error', response.data.errors[0].message);
                } else {
                    MessageFactory.show('success', 'Author ' + vm.author.name + ' salvo com sucesso.');
                    vm.clear();
                }
            });
        };

        vm.clear = function () {
            vm.author = '';
        };
    }
})();