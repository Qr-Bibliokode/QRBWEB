(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CommentCreateController', ['CommentFactory', 'BookFactory', CommentCreateController]);

    /** @ngInject */
    function CommentCreateController(CommentFactory, BookFactory) {
        var vm = this;

        vm.create = function () {
            CommentFactory.create(vm.comment).then(function () {
                vm.clear();
            });
        };

        vm.clear = function () {
            vm.comment = '';
        };

        vm.loadBooks = function () {
            BookFactory.list();
        };

        vm.getBooks = function () {
            return BookFactory.get();
        };
    }
})();