(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CommentCreateController', ['CommentFactory', CommentCreateController]);

    /** @ngInject */
    function CommentCreateController(CommentFactory) {
        var vm = this;

        vm.create = function () {
            CommentFactory.create(vm.comment).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.comment = '';
        };
    }
})();