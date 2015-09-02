(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StudentEditController', ['StudentFactory', '$stateParams', '$state', StudentEditController]);

    /** @ngInject */
    function StudentEditController(StudentFactory, $stateParams, $state) {
        var vm = this;

        vm.student = '';

        vm.update = function () {
            StudentFactory.update(vm.student).then(function () {
                vm.clear();
                $state.transitionTo('studentList');
            });
        };

        vm.loadStudent = function () {
            StudentFactory.getById($stateParams.id).then(function (result) {
                vm.student = result.data;
            });
        };

        vm.clear = function () {
            vm.student = '';
        };

        vm.loadStudent();
    }
})
();
