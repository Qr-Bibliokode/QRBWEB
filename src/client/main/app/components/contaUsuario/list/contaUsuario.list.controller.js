(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ContaUsuarioListController', ['ContaUsuarioFactory', '$scope', 'MessageFactory', ContaUsuarioListController]);

    /** @ngInject */
    function ContaUsuarioListController(ContaUsuarioFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
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

        vm.init = vm.list();
    }
})();
