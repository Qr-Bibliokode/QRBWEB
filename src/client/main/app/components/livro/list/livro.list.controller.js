(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LivroListController', ['LivroFactory', '$scope', 'MessageFactory', LivroListController]);

    /** @ngInject */
    function LivroListController(LivroFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
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
                MessageFactory.error('Não é possível deletar este autor');
            });
        };

        vm.onorderchange = function () {
            return vm.list();
        };

        vm.onpagechange = function () {
            return vm.list();
        };

        vm.init = vm.list();
    }
})();
