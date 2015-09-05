(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CommentEditController', ['CommentFactory', '$stateParams', '$state', 'UserAccountFactory', 'MessageFactory', CommentEditController]);

    /** @ngInject */
    function CommentEditController(CommentFactory, $stateParams, $state, UserAccountFactory, MessageFactory) {
        var vm = this;

        vm.comment = '';

        vm.update = function () {
            CommentFactory.update(vm.comment).then(function () {
                MessageFactory.success('Comentário editado com sucesso.');
                vm.clear();
                $state.transitionTo('commentList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
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

        vm.loadUserAccounts = function () {
            UserAccountFactory.list();
        };

        vm.getUserAccounts = function () {
            return UserAccountFactory.get();
        };
    }
})
();
