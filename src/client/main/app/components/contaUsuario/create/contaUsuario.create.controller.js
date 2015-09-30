(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ContaUsuarioCreateController', ['ContaUsuarioFactory', 'MessageFactory', ContaUsuarioCreateController]);

    /** @ngInject */
    function ContaUsuarioCreateController(ContaUsuarioFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            ContaUsuarioFactory.create(vm.contaUsuario).then(function () {
                MessageFactory.success('Criada conta com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.contaUsuario = '';
        };
    }
})();