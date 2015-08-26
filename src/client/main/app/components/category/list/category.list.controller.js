(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoryListController', ['CategoryFactory', '$scope', CategoryListController]);

    /** @ngInject */
    function CategoryListController(CategoryFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return CategoryFactory.list();
        };

        vm.getCategories = function () {
            return CategoryFactory.get();
        };

        vm.remove = function (id) {
            CategoryFactory.remove(id);
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
