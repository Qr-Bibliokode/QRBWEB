(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('HolidayEditController', ['HolidayFactory', '$stateParams', '$state', 'MessageFactory', HolidayEditController]);

    /** @ngInject */
    function HolidayEditController(HolidayFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.holiday = '';

        vm.update = function () {
            HolidayFactory.update(vm.holiday).then(function () {
                MessageFactory.success('Feriado ' + vm.holiday.description + ' editado com sucesso.');
                $state.transitionTo('holidayList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
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
