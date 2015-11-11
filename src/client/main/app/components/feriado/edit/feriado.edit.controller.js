(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('FeriadoEditController', ['FeriadoFactory', '$stateParams', '$state', 'MessageFactory', '$filter', FeriadoEditController]);

    /** @ngInject */
    function FeriadoEditController(FeriadoFactory, $stateParams, $state, MessageFactory, $filter) {
        var vm = this;

        vm.update = function () {
            vm.feriado.dataInicio = $filter('date')(vm.feriado.dataInicio, "yyyy-MM-dd HH:mm:ss.s");
            vm.feriado.dataFim = $filter('date')(vm.feriado.dataFim, "yyyy-MM-dd HH:mm:ss.s");
            FeriadoFactory.update(vm.feriado).then(function () {
                MessageFactory.success('Feriado ' + vm.feriado.descricao + ' editado com sucesso.');
                $state.transitionTo('feriadoList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadFeriado = function () {
            FeriadoFactory.getById($stateParams.id).then(function (result) {
                vm.feriado = result.data;
                //Tentativa de arrumar o problema...
                //vm.feriado.dataInicio = $filter('date')(vm.feriado.dataInicio, "EEE MMM dd yyyy HH:mm:ss Z");
                //vm.feriado.dataFim = $filter('date')(vm.feriado.dataFim, "EEE MMM dd yyyy HH:mm:ss Z");
            });
        };

        vm.clear = function () {
            vm.feriado = '';
        };

        vm.loadFeriado();
    }
})
();
