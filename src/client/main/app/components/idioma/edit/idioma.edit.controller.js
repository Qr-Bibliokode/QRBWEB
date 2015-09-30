(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomaEditController', ['IdiomaFactory', '$stateParams', '$state', 'MessageFactory', IdiomaEditController]);

    /** @ngInject */
    function IdiomaEditController(IdiomaFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.idioma = '';

        vm.update = function () {
            IdiomaFactory.update(vm.idioma).then(function () {
                MessageFactory.success('Idioma ' + vm.idioma.descricao + ' editado com sucesso.');
                vm.clear();
                $state.transitionTo('idiomaList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadIdioma = function () {
            IdiomaFactory.getById($stateParams.id).then(function (result) {
                vm.idioma = result.data;
            });
        };

        vm.clear = function () {
            vm.idioma = '';
        };

        vm.loadIdioma();
    }
})
();
