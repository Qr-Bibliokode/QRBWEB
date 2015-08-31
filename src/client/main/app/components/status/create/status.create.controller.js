(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StatusCreateController', ['StatusFactory', StatusCreateController]);

    /** @ngInject */
    function StatusCreateController(StatusFactory) {
        var vm = this;

        vm.create = function () {
            StatusFactory.create(vm.status).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.status = '';
        };
    }
})();