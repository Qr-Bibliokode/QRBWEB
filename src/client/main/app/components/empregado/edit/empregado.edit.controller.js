(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmpregadoEditController', ['EmpregadoFactory', '$stateParams', '$state', 'MessageFactory', EmpregadoEditController]);

    /** @ngInject */
    function EmpregadoEditController(EmpregadoFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.empregado = '';

        vm.update = function () {
            EmpregadoFactory.update(vm.empregado).then(function () {
                MessageFactory.success('Empregado ' + vm.empregado.nome + ' editado com sucesso.');
                vm.clear();
                $state.transitionTo('empregadoList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadEmpregado = function () {
            EmpregadoFactory.getById($stateParams.id).then(function (result) {
                vm.empregado = result.data;
            });
        };

        vm.clear = function () {
            vm.empregado = '';
        };

        vm.loadEmpregado();
    }
})
();
