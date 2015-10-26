(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('qrcodeListController', ['LivroFactory', '$scope', 'MessageFactory', qrcodeListController]);

    /** @ngInject */
    function qrcodeListController(LivroFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'nome',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return LivroFactory.list();
        };

        vm.getLivros = function () {
            return LivroFactory.get();
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
