(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EstudanteListController', ['EstudanteFactory', '$scope', 'MessageFactory', EstudanteListController]);

    /** @ngInject */
    function EstudanteListController(EstudanteFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return EstudanteFactory.list();
        };

        vm.getEstudantes = function () {
            return EstudanteFactory.get();
        };

        vm.remove = function (id) {
            EstudanteFactory.remove(id).then(function () {
                MessageFactory.success('Estudante deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este estudante');
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
