(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LendingListController', ['LendingFactory', '$scope', LendingListController]);

    /** @ngInject */
    function LendingListController(LendingFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return LendingFactory.list();
        };

        vm.getLendings = function () {
            return LendingFactory.get();
        };

        vm.remove = function (id) {
            LendingFactory.remove(id);
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
