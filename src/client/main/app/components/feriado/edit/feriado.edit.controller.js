(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('FeriadoEditController', ['FeriadoFactory', '$stateParams', '$state', 'MessageFactory', FeriadoEditController]);

    /** @ngInject */
    function FeriadoEditController(FeriadoFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.feriado = '';

        vm.update = function () {
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
            });
        };

        vm.clear = function () {
            vm.feriado = '';
        };

        vm.loadFeriado();
    }
})
();
