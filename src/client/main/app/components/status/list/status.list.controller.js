(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StatusListController', ['StatusFactory', '$scope', StatusListController]);

    /** @ngInject */
    function StatusListController(StatusFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return StatusFactory.list();
        };

        vm.getStatus = function () {
            return StatusFactory.get();
        };

        vm.remove = function (id) {
            StatusFactory.remove(id);
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
