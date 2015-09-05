(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StudentCreateController', ['StudentFactory', 'MessageFactory', StudentCreateController]);

    /** @ngInject */
    function StudentCreateController(StudentFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            StudentFactory.create(vm.student).then(function () {
                MessageFactory.success('Inserido estudante ' + vm.student.name + ' com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.student = '';
        };
    }
})();