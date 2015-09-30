(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EstudanteCreateController', ['EstudanteFactory', 'MessageFactory', EstudanteCreateController]);

    /** @ngInject */
    function EstudanteCreateController(EstudanteFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            EstudanteFactory.create(vm.estudante).then(function () {
                MessageFactory.success('Inserido estudante ' + vm.estudante.nome + ' com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.estudante = '';
        };
    }
})();