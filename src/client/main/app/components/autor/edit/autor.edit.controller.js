(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AutorEditController', ['AutorFactory', '$stateParams', '$state', 'MessageFactory', AutorEditController]);

    /** @ngInject */
    function AutorEditController(AutorFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.autor = '';

        vm.update = function () {
            AutorFactory.update(vm.autor).then(function () {
                MessageFactory.success('Autor ' + vm.autor.nome + ' salvo com sucesso.');
                vm.clear();
                $state.transitionTo('autorList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadAutor = function () {
            AutorFactory.getById($stateParams.id).then(function (result) {
                vm.autor = result.data;
            });
        };

        vm.clear = function () {
            vm.autor = '';
        };

        vm.loadAutor();
    }
})
();
