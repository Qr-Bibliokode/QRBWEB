(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ReservaListController', ['ReservaFactory', '$scope', 'MessageFactory', ReservaListController]);

    /** @ngInject */
    function ReservaListController(ReservaFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return ReservaFactory.list();
        };

        vm.getReservas = function () {
            return ReservaFactory.get();
        };

        vm.remove = function (id) {
            ReservaFactory.remove(id).then(function () {
                MessageFactory.success('Reserva deletada com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar esta reserva');
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
