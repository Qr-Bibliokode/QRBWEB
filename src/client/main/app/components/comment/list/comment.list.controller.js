(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CommentListController', ['CommentFactory', '$scope', CommentListController]);

    /** @ngInject */
    function CommentListController(CommentFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return CommentFactory.list();
        };

        vm.getComments = function () {
            return CommentFactory.get();
        };

        vm.remove = function (id) {
            CommentFactory.remove(id);
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
