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
                MessageFactory.success('Author ' + vm.author.name + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.author = '';
        };
    }
})();