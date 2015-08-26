(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomEditController', ['IdiomFactory', '$stateParams', '$state', IdiomEditController]);

    /** @ngInject */
    function IdiomEditController(IdiomFactory, $stateParams, $state) {
        var vm = this;

        vm.idiom = '';

        vm.update = function () {
            IdiomFactory.update(vm.idiom).then(function () {
                vm.clear();
                $state.transitionTo('idiomList');
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
