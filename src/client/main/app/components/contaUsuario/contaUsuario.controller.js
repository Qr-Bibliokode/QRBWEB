(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('ContaUsuarioController', ['EstudanteFactory', 'EmpregadoFactory', 'MessageFactory', 'ContaUsuarioFactory', ContaUsuarioController]);

    function ContaUsuarioController(EstudanteFactory, EmpregadoFactory, MessageFactory, ContaUsuarioFactory) {
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

        vm.createEmpregado = function () {
            EmpregadoFactory.create(vm.empregado).then(function (response) {
                vm.empregado.id = response.data.id;
                MessageFactory.success('Inserido estudante ' + vm.empregado.name + ' ID:' + vm.empregado.id + 'com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.createAccount = function () {
            vm.contaUsuario.person = vm.estudante == null ? vm.empregado : vm.estudante;
            ContaUsuarioFactory.create(vm.contaUsuario).then(function () {
                MessageFactory.success('Criada conta com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

    }

})();
