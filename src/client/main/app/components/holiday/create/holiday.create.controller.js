(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('HolidayCreateController', ['HolidayFactory', 'MessageFactory', '$filter', HolidayCreateController]);

    /** @ngInject */
    function HolidayCreateController(HolidayFactory, MessageFactory, $filter) {
        var vm = this;

        vm.create = function () {
            vm.holiday.startDate = $filter('date')(vm.holiday.startDate, "yyyy-MM-dd HH:mm:ss.s");
            vm.holiday.finalDate = $filter('date')(vm.holiday.finalDate, "yyyy-MM-dd HH:mm:ss.s");
            HolidayFactory.create(vm.holiday).then(function () {
                MessageFactory.success('Feriado ' + vm.holiday.description + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.holiday = '';
        };
    }
})();