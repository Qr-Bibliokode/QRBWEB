(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('HolidayCreateController', ['HolidayFactory', 'MessageFactory', HolidayCreateController]);

    /** @ngInject */
    function HolidayCreateController(HolidayFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
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