(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('EmpregadoCreateController', ['EmpregadoFactory', 'MessageFactory', EmpregadoCreateController]);

    /** @ngInject */
    function EmpregadoCreateController(EmpregadoFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            EmpregadoFactory.create(vm.empregado).then(function () {
                MessageFactory.success('Empregado ' + vm.empregado.nome + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.empregado = '';
        };
    }
})();