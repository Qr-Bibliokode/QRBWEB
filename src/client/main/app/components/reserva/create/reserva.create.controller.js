(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ReservaCreateController', ['ReservaFactory', 'LivroFactory', 'ContaUsuarioFactory', 'MessageFactory', '$filter', ReservaCreateController]);

    /** @ngInject */
    function ReservaCreateController(ReservaFactory, LivroFactory, ContaUsuarioFactory, MessageFactory, $filter) {
        var vm = this;

        vm.create = function () {
            vm.reserva.dataInicio = $filter('date')(vm.reserva.dataInicio, "yyyy-MM-dd HH:mm:ss.s");
            vm.reserva.dataFim = $filter('date')(vm.reserva.dataFim, "yyyy-MM-dd HH:mm:ss.s");
            ReservaFactory.create(vm.reserva).then(function () {
                MessageFactory.success('Reserva salva com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadLivros = function () {
            LivroFactory.list();
        };

        vm.getLivros = function () {
            return LivroFactory.get();
        };

        vm.loadContaUsuarios = function () {
            ContaUsuarioFactory.list();
        };

        vm.getContaUsuarios = function () {
            return ContaUsuarioFactory.get();
        };

        vm.clear = function () {
            vm.reserva = '';
        };
    }
})();