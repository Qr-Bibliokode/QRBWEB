(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('FeriadoListController', ['FeriadoFactory', '$scope', 'MessageFactory', FeriadoListController]);

    /** @ngInject */
    function FeriadoListController(FeriadoFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return FeriadoFactory.list();
        };

        vm.getFeriados = function () {
            return FeriadoFactory.get();
        };

        vm.remove = function (id) {
            FeriadoFactory.remove(id).then(function () {
                MessageFactory.success('Feriado deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este feriado');
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
