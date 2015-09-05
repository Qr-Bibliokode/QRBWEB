(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoryEditController', ['CategoryFactory', '$stateParams', '$state', 'MessageFactory', CategoryEditController]);

    /** @ngInject */
    function CategoryEditController(CategoryFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.category = '';

        vm.update = function () {
            CategoryFactory.update(vm.category).then(function () {
                MessageFactory.success('Categoria ' + vm.category.description + ' editada com sucesso.');
                vm.clear();
                $state.transitionTo('categoryList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
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
