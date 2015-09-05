(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomEditController', ['IdiomFactory', '$stateParams', '$state', 'MessageFactory', IdiomEditController]);

    /** @ngInject */
    function IdiomEditController(IdiomFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.idiom = '';

        vm.update = function () {
            IdiomFactory.update(vm.idiom).then(function () {
                MessageFactory.success('Idioma ' + vm.idiom.description + ' editado com sucesso.');
                vm.clear();
                $state.transitionTo('idiomList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadIdiom = function () {
            IdiomFactory.getById($stateParams.id).then(function (result) {
                vm.idiom = result.data;
            });
        };

        vm.clear = function () {
            vm.idiom = '';
        };

        vm.loadIdiom();
    }
})
();
