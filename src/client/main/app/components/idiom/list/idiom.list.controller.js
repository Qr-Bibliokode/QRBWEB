(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomListController', ['IdiomFactory', '$scope', IdiomListController]);

    /** @ngInject */
    function IdiomListController(IdiomFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return IdiomFactory.list();
        };

        vm.getIdioms = function () {
            return IdiomFactory.get();
        };

        vm.remove = function (id) {
            IdiomFactory.remove(id);
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
