(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('HolidayListController', ['HolidayFactory', '$scope', 'MessageFactory', HolidayListController]);

    /** @ngInject */
    function HolidayListController(HolidayFactory, $scope, MessageFactory) {
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
            HolidayFactory.remove(id).then(function () {
                MessageFactory.success('Feriado deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este feriado');
            });
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
