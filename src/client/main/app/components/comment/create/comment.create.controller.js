(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CommentCreateController', ['CommentFactory', 'MessageFactory', CommentCreateController]);

    /** @ngInject */
    function CommentCreateController(CommentFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            CommentFactory.create(vm.comment).then(function () {
                MessageFactory.success('Comentário salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.comment = '';
        };
    }
})();