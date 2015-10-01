(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('ContaUsuarioController', ['EstudanteFactory', 'FuncionarioFactory', 'MessageFactory', 'ContaUsuarioFactory', ContaUsuarioController]);

    function ContaUsuarioController(EstudanteFactory, FuncionarioFactory, MessageFactory, ContaUsuarioFactory) {
        var vm = this;
        vm.title = 'Página ContaUsuario';

        vm.type = '';

        vm.createEstudante = function () {
            EstudanteFactory.create(vm.estudante).then(function (response) {
                vm.estudante.id = response.data.id;
                MessageFactory.success('Inserido estudante ' + vm.estudante.name + ' ID:' + vm.estudante.id + 'com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.createFuncionario = function () {
            FuncionarioFactory.create(vm.funcionario).then(function (response) {
                vm.funcionario.id = response.data.id;
                MessageFactory.success('Inserido estudante ' + vm.funcionario.name + ' ID:' + vm.funcionario.id + 'com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.createAccount = function () {
            vm.contaUsuario.person = vm.estudante == null ? vm.funcionario : vm.estudante;
            ContaUsuarioFactory.create(vm.contaUsuario).then(function () {
                MessageFactory.success('Criada conta com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

    }

})();
