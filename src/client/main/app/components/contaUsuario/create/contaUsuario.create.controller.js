(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('ContaUsuarioCreateController', ['EstudanteFactory', 'FuncionarioFactory', 'MessageFactory', 'ContaUsuarioFactory', ContaUsuarioCreateController]);

    function ContaUsuarioCreateController(EstudanteFactory, FuncionarioFactory, MessageFactory, ContaUsuarioFactory) {
        var vm = this;
        vm.title = 'Página ContaUsuario';

        vm.type = '';

        vm.selectedTabCreate = 0;

        vm.seguinte = function () {
            vm.selectedTabCreate = vm.selectedTabCreate + 1;
        };

        vm.createEstudante = function () {
            EstudanteFactory.create(vm.estudante).then(function (response) {
                vm.estudante.id = response.data.id;
                MessageFactory.success('Criado estudante ' + vm.estudante.nome + ' com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.createFuncionario = function () {
            FuncionarioFactory.create(vm.funcionario).then(function (response) {
                vm.funcionario.id = response.data.id;
                MessageFactory.success('Criado funcionário ' + vm.funcionario.nome + ' com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.createAccount = function () {
            vm.contaUsuario.pessoa = vm.estudante == null ? vm.funcionario : vm.estudante;
            ContaUsuarioFactory.create(vm.contaUsuario).then(function () {
                MessageFactory.success('Criada conta com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

    }

})();
