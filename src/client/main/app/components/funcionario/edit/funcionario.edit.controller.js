(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('FuncionarioEditController', ['FuncionarioFactory', '$stateParams', '$state', 'MessageFactory', FuncionarioEditController]);

    /** @ngInject */
    function FuncionarioEditController(FuncionarioFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.funcionario = '';

        vm.update = function () {
            FuncionarioFactory.update(vm.funcionario).then(function () {
                MessageFactory.success('Funcionario ' + vm.funcionario.nome + ' editado com sucesso.');
                vm.clear();
                $state.transitionTo('funcionarioList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadFuncionario = function () {
            FuncionarioFactory.getById($stateParams.id).then(function (result) {
                vm.funcionario = result.data;
            });
        };

        vm.clear = function () {
            vm.funcionario = '';
        };

        vm.loadFuncionario();
    }
})
();
