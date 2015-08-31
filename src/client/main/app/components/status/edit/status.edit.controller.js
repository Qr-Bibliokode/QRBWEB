(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StatusEditController', ['StatusFactory', '$stateParams', '$state', StatusEditController]);

    /** @ngInject */
    function StatusEditController(StatusFactory, $stateParams, $state) {
        var vm = this;

        vm.status = '';

        vm.update = function () {
            StatusFactory.update(vm.status).then(function () {
                vm.clear();
                $state.transitionTo('statusList');
            });
        };

        vm.loadStatus = function () {
            StatusFactory.getById($stateParams.id).then(function (result) {
                vm.status = result.data;
            });
        };

        vm.clear = function () {
            vm.status = '';
        };

        vm.loadStatus();
    }
})
();
