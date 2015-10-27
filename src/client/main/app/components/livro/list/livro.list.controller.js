(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LivroListController', ['LivroFactory', 'EmprestimoFactory', '$scope', 'MessageFactory', LivroListController]);

    /** @ngInject */
    function LivroListController(LivroFactory, EmprestimoFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return LivroFactory.list();
        };

        vm.getLivros = function () {
            return LivroFactory.get();
        };

        vm.remove = function (id) {
            LivroFactory.remove(id).then(function () {
                MessageFactory.success('Livro deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este livro');
            });
        };

        vm.onorderchange = function () {
            return vm.list();
        };

        vm.onpagechange = function () {
            return vm.list();
        };

        vm.mostraHistoricoLocacoes = function (id) {
            EmprestimoFactory.obtenhaHistoricoEmprestimosPorLivro(id).then(function (response) {
                vm.historicoEmprestimos = response.data;
            }, function () {
                MessageFactory.error('Não é possível mostrar o histórico deste livro');
            });
        };

        vm.init = vm.list();
    }
})();
