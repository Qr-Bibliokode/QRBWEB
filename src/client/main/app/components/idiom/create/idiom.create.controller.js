(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomCreateController', ['IdiomFactory', IdiomCreateController]);

    /** @ngInject */
    function IdiomCreateController(IdiomFactory) {
        var vm = this;

        vm.create = function () {
            IdiomFactory.create(vm.idiom).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.idiom = '';
        };
    }
})();