(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorCreateController', ['AuthorFactory', AuthorCreateController]);

    /** @ngInject */
    function AuthorCreateController(AuthorFactory) {
        var vm = this;

        vm.create = function () {
            AuthorFactory.create(vm.author).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.author = '';
        };
    }
})();