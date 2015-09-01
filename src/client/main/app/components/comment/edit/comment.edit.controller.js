(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CommentEditController', ['CommentFactory', '$stateParams', '$state', CommentEditController]);

    /** @ngInject */
    function CommentEditController(CommentFactory, $stateParams, $state) {
        var vm = this;

        vm.comment = '';

        vm.update = function () {
            CommentFactory.update(vm.comment).then(function () {
                vm.clear();
                $state.transitionTo('commentList');
            });
        };

        vm.loadComment = function () {
            CommentFactory.getById($stateParams.id).then(function (result) {
                vm.comment = result.data;
            });
        };

        vm.clear = function () {
            vm.comment = '';
        };

        vm.loadComment();
    }
})
();
