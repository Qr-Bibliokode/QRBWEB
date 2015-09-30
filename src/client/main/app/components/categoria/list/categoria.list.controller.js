(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoriaListController', ['CategoriaFactory', '$scope', 'MessageFactory', CategoriaListController]);

    /** @ngInject */
    function CategoriaListController(CategoriaFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return CategoriaFactory.list();
        };

        vm.getCategories = function () {
            return CategoriaFactory.get();
        };

        vm.remove = function (id) {
            CategoriaFactory.remove(id).then(function () {
                MessageFactory.success('Categoria deletada com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar esta categoria');
            });
        };

        vm.onorderchange = function () {
            return vm.list();
        };

        vm.onpagechange = function () {
            return vm.list();
        };

        vm.init = vm.list();
    }
})();
