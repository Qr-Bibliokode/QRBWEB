(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('FuncionarioCreateController', ['FuncionarioFactory', 'MessageFactory', FuncionarioCreateController]);

    /** @ngInject */
    function FuncionarioCreateController(FuncionarioFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            FuncionarioFactory.create(vm.funcionario).then(function () {
                MessageFactory.success('Funcionario ' + vm.funcionario.nome + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.funcionario = '';
        };
    }
})();