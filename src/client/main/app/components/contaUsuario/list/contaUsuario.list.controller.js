(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ContaUsuarioListController', ['ContaUsuarioFactory', '$scope', 'MessageFactory', '$mdDialog', ContaUsuarioListController]);

    /** @ngInject */
    function ContaUsuarioListController(ContaUsuarioFactory, $scope, MessageFactory, $mdDialog) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return ContaUsuarioFactory.list();
        };

        vm.getContaUsuarios = function () {
            return ContaUsuarioFactory.get();
        };

        vm.remove = function (id) {
            ContaUsuarioFactory.remove(id).then(function () {
                MessageFactory.success('Conta deletada com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este autor');
            });
        };

        vm.onorderchange = function () {
            return vm.list();
        };

        vm.onpagechange = function () {
            return vm.list();
        };


        vm.verificarMultas = function (id) {
            ContaUsuarioFactory.verificarMultas(id).then(function () {
                MessageFactory.success('Verificação realizada com sucesso.');
                vm.list();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.dialogMultas = function(ev, contaUsuario) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Multas de ' +contaUsuario.pessoa.nome)
                .content("<tr ng-repeat='multa in contaUsuario.multas'>" +
                "<td>{{multa.valor}}</td>" +
                "<td>{{multa.emprestimo.id}}</td></tr>")
                .targetEvent(ev)
                .ok('Realizar pagamento')
                .cancel('Cancelar');
            $mdDialog.show(confirm).then(function() {
                $scope.status = 'You decided to get rid of your debt.';
            }, function() {
                $scope.status = 'You decided to keep your debt.';
            });
        };

        vm.init = vm.list();
    }
})();
