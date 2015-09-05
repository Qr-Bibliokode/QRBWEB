(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomListController', ['IdiomFactory', '$scope', 'MessageFactory', IdiomListController]);

    /** @ngInject */
    function IdiomListController(IdiomFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return IdiomFactory.list();
        };

        vm.getIdioms = function () {
            return IdiomFactory.get();
        };

        vm.remove = function (id) {
            IdiomFactory.remove(id).then(function () {
                MessageFactory.success('Idioma deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este idioma');
            });
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
