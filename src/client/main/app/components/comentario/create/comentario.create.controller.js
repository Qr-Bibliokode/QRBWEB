(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ComentarioCreateController', ['ComentarioFactory', 'MessageFactory', 'ContaUsuarioFactory', ComentarioCreateController]);

    /** @ngInject */
    function ComentarioCreateController(ComentarioFactory, MessageFactory, ContaUsuarioFactory) {
        var vm = this;

        vm.create = function () {
            ComentarioFactory.create(vm.comentario).then(function () {
                MessageFactory.success('Comentário salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.comentario = '';
        };

        vm.loadContaUsuarios = function () {
            ContaUsuarioFactory.list();
        };

        vm.getContaUsuarios = function () {
            return ContaUsuarioFactory.get();
        };
    }
})();