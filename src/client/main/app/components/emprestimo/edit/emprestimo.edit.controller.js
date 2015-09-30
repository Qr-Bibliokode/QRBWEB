(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmprestimoEditController', ['EmprestimoFactory', '$stateParams', '$state', 'MessageFactory', EmprestimoEditController]);

    /** @ngInject */
    function EmprestimoEditController(EmprestimoFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.emprestimo = '';

        vm.update = function () {
            EmprestimoFactory.update(vm.emprestimo).then(function () {
                MessageFactory.success('Empréstimo ' + vm.emprestimo.id + ' editado com sucesso.');
                $state.transitionTo('emprestimoList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadEmprestimo = function () {
            EmprestimoFactory.getById($stateParams.id).then(function (result) {
                vm.emprestimo = result.data;
            });
        };

        vm.clear = function () {
            vm.emprestimo = '';
        };

        vm.loadEmprestimo();
    }
})
();
