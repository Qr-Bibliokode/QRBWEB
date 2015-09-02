(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StudentListController', ['StudentFactory', '$scope', StudentListController]);

    /** @ngInject */
    function StudentListController(StudentFactory, $scope) {
        var vm = this;

        vm.selected = [];

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 10
        };

        vm.list = function () {
            return StudentFactory.list();
        };

        vm.getStudents = function () {
            return StudentFactory.get();
        };

        vm.remove = function (id) {
            StudentFactory.remove(id);
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
