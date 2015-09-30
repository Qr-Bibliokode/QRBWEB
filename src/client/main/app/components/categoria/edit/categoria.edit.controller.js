(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoriaEditController', ['CategoriaFactory', '$stateParams', '$state', 'MessageFactory', CategoriaEditController]);

    /** @ngInject */
    function CategoriaEditController(CategoriaFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.categoria = '';

        vm.update = function () {
            CategoriaFactory.update(vm.categoria).then(function () {
                MessageFactory.success('Categoria ' + vm.categoria.descricao + ' editada com sucesso.');
                vm.clear();
                $state.transitionTo('categoriaList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadCategoria = function () {
            CategoriaFactory.getById($stateParams.id).then(function (result) {
                vm.categoria = result.data;
            });
        };

        vm.clear = function () {
            vm.categoria = '';
        };

        vm.loadCategoria();
    }
})
();
