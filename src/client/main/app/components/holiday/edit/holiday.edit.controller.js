(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('HolidayEditController', ['HolidayFactory', '$stateParams', '$state', HolidayEditController]);

    /** @ngInject */
    function HolidayEditController(HolidayFactory, $stateParams, $state) {
        var vm = this;

        vm.holiday = '';

        vm.update = function () {
            HolidayFactory.update(vm.holiday).then(function () {
                vm.clear();
                $state.transitionTo('holidayList');
            });
        };

        vm.loadHoliday = function () {
            HolidayFactory.getById($stateParams.id).then(function (result) {
                vm.holiday = result.data;
            });
        };

        vm.clear = function () {
            vm.holiday = '';
        };

        vm.loadHoliday();
    }
})
();
