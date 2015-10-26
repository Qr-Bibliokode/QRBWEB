(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ReservaEditController', ['ReservaFactory', 'LivroFactory', 'ContaUsuarioFactory', '$stateParams', '$state', 'MessageFactory', ReservaEditController]);

    /** @ngInject */
    function ReservaEditController(ReservaFactory, LivroFactory, ContaUsuarioFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.reserva = '';

        vm.update = function () {
            ReservaFactory.update(vm.reserva).then(function () {
                MessageFactory.success('Reserva editada com sucesso.');
                $state.transitionTo('reservaList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadReserva = function () {
            ReservaFactory.getById($stateParams.id).then(function (result) {
                vm.reserva = result.data;
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

        vm.loadReserva();
    }
})
();
