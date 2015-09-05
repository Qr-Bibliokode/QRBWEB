(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StudentEditController', ['StudentFactory', '$stateParams', '$state', 'MessageFactory', StudentEditController]);

    /** @ngInject */
    function StudentEditController(StudentFactory, $stateParams, $state, MessageFactory) {
        var vm = this;

        vm.student = '';

        vm.update = function () {
            StudentFactory.update(vm.student).then(function () {
                MessageFactory.success('Alterado estudante ' + vm.student.name + ' com sucesso.');
                $state.transitionTo('studentList');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
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
