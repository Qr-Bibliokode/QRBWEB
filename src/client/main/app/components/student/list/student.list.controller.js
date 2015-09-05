(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('StudentListController', ['StudentFactory', '$scope', 'MessageFactory', StudentListController]);

    /** @ngInject */
    function StudentListController(StudentFactory, $scope, MessageFactory) {
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
            StudentFactory.remove(id).then(function () {
                MessageFactory.success('Estudante deletado com sucesso.');
            }, function () {
                MessageFactory.error('Não é possível deletar este estudante');
            });
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
