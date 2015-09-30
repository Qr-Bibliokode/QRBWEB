(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EstudanteEditController', ['EstudanteFactory', '$stateParams', '$state', 'MessageFactory', EstudanteEditController]);

    /** @ngInject */
    function EstudanteEditController(EstudanteFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.estudante = '';

        vm.update = function () {
            EstudanteFactory.update(vm.estudante).then(function () {
                MessageFactory.success('Alterado estudante ' + vm.estudante.nome + ' com sucesso.');
                $state.transitionTo('estudanteList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadEstudante = function () {
            EstudanteFactory.getById($stateParams.id).then(function (result) {
                vm.estudante = result.data;
            });
        };

        vm.clear = function () {
            vm.estudante = '';
        };

        vm.loadEstudante();
    }
})
();
