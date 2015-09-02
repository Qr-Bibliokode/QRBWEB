(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('HolidayCreateController', ['HolidayFactory', HolidayCreateController]);

    /** @ngInject */
    function HolidayCreateController(HolidayFactory) {
        var vm = this;

        vm.create = function () {
            HolidayFactory.create(vm.holiday).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.holiday = '';
        };
    }
})();