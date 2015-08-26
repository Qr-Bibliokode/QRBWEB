(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoryCreateController', ['CategoryFactory', CategoryCreateController]);

    /** @ngInject */
    function CategoryCreateController(CategoryFactory) {
        var vm = this;

        vm.create = function () {
            CategoryFactory.create(vm.category).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.category = '';
        };
    }
})();