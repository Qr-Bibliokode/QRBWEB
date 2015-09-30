(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ContaUsuarioEditController', ['ContaUsuarioFactory', '$stateParams', '$state', 'MessageFactory', ContaUsuarioEditController]);

    /** @ngInject */
    function ContaUsuarioEditController(ContaUsuarioFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.contaUsuario = '';

        vm.update = function () {
            ContaUsuarioFactory.update(vm.contaUsuario).then(function () {
                MessageFactory.success('Conta editada com sucesso.');
                $state.transitionTo('contaUsuarioList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadContaUsuario = function () {
            ContaUsuarioFactory.getById($stateParams.id).then(function (result) {
                vm.contaUsuario = result.data;
            });
        };

        vm.clear = function () {
            vm.contaUsuario = '';
        };

        vm.loadContaUsuario();
    }
})
();
