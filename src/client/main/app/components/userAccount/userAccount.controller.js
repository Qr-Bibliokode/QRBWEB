(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('UserAccountController', ['$scope', '$state', 'StudentFactory', 'EmployeeFactory', 'MessageFactory', 'UserAccountFactory', UserAccountController]);

    function UserAccountController(StudentFactory, EmployeeFactory, MessageFactory, UserAccountFactory) {
        var vm = this;
        vm.title = 'Página UserAccount';

        vm.type = '';

        vm.createStudent = function () {
            StudentFactory.create(vm.student).then(function (response) {
                vm.student.id = response.data.id;
                MessageFactory.success('Inserido estudante ' + vm.student.name + ' ID:' + vm.student.id + 'com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.createEmployee = function () {
            EmployeeFactory.create(vm.employee).then(function (response) {
                vm.employee.id = response.data.id;
                MessageFactory.success('Inserido estudante ' + vm.employee.name + ' ID:' + vm.employee.id + 'com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.createAccount = function () {
            vm.userAccount.person = vm.student == null ? vm.employee : vm.student;
            UserAccountFactory.create(vm.userAccount).then(function () {
                MessageFactory.success('Criada conta com sucesso.');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

    }

})();
