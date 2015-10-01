(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomaListController', ['IdiomaFactory', '$scope', 'MessageFactory', IdiomaListController]);

    /** @ngInject */
    function IdiomaListController(IdiomaFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return IdiomaFactory.list();
        };

        vm.getIdiomas = function () {
            return IdiomaFactory.get();
        };

        vm.remove = function (id) {
            IdiomaFactory.remove(id).then(function () {
                MessageFactory.success('Idioma deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este idiomaa');
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
