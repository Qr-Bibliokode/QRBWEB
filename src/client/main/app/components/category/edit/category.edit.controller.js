(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoryEditController', ['CategoryFactory', '$stateParams', '$state', CategoryEditController]);

    /** @ngInject */
    function CategoryEditController(CategoryFactory, $stateParams, $state) {
        var vm = this;

        vm.category = '';

        vm.update = function () {
            CategoryFactory.update(vm.category).then(function () {
                vm.clear();
                $state.transitionTo('categoryList');
            });
        };

        vm.loadCategory = function () {
            CategoryFactory.getById($stateParams.id).then(function (result) {
                vm.category = result.data;
            });
        };

        vm.clear = function () {
            vm.category = '';
        };

        vm.loadCategory();
    }
})
();
