(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorListController', ['AuthorFactory', '$scope', 'MessageFactory', AuthorListController]);

    /** @ngInject */
    function AuthorListController(AuthorFactory, $scope, MessageFactory) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return AuthorFactory.list();
        };

        vm.getAuthors = function () {
            return AuthorFactory.get();
        };

        vm.remove = function (id) {
            AuthorFactory.remove(id);
            MessageFactory.show('success','Author deletado com sucesso.')

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
