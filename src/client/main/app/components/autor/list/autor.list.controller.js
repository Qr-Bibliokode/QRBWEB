(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AutorListController', ['AutorFactory', '$scope', 'MessageFactory', AutorListController]);

    /** @ngInject */
    function AutorListController(AutorFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return AutorFactory.list();
        };

        vm.getAutors = function () {
            return AutorFactory.get();
        };

        vm.remove = function (id) {
            AutorFactory.remove(id).then(function () {
                MessageFactory.success('Autor deletado com sucesso.');
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
