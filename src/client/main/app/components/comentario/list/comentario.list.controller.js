(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ComentarioListController', ['ComentarioFactory', '$scope', 'MessageFactory', ComentarioListController]);

    /** @ngInject */
    function ComentarioListController(ComentarioFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return ComentarioFactory.list();
        };

        vm.getComentarios = function () {
            return ComentarioFactory.get();
        };

        vm.remove = function (id) {
            ComentarioFactory.remove(id).then(function () {
                MessageFactory.success('Comentário deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este comentário');
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
