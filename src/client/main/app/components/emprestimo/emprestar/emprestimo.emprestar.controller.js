(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmprestimoLendController', ['EmprestimoFactory', 'MessageFactory', 'LivroFactory', 'ContaUsuarioFactory', EmprestimoLendController]);

    /** @ngInject */
    function EmprestimoLendController(EmprestimoFactory, MessageFactory, LivroFactory, ContaUsuarioFactory) {
        var vm = this;

        vm.emprestar = function () {
            EmprestimoFactory.emprestar(vm.emprestimo).then(function () {
                MessageFactory.success('Empréstimo ' + vm.emprestimo.id + ' realizado com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.emprestimo = '';
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
    }
})();