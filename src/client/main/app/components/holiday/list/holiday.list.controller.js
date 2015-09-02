(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('HolidayListController', ['HolidayFactory', '$scope', HolidayListController]);

    /** @ngInject */
    function HolidayListController(HolidayFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return HolidayFactory.list();
        };

        vm.getHolidays = function () {
            return HolidayFactory.get();
        };

        vm.remove = function (id) {
            HolidayFactory.remove(id);
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
