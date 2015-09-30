(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('ComentarioEditController', ['ComentarioFactory', '$stateParams', '$state', 'ContaUsuarioFactory', 'MessageFactory', ComentarioEditController]);

    /** @ngInject */
    function ComentarioEditController(ComentarioFactory, $stateParams, $state, ContaUsuarioFactory, MessageFactory) {
        var vm = this;

        vm.comentario = '';

        vm.update = function () {
            ComentarioFactory.update(vm.comentario).then(function () {
                MessageFactory.success('Comentário editado com sucesso.');
                vm.clear();
                $state.transitionTo('comentarioList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadComentario = function () {
            ComentarioFactory.getById($stateParams.id).then(function (result) {
                vm.comentario = result.data;
            });
        };

        vm.clear = function () {
            vm.comentario = '';
        };

        vm.loadComentario();

        vm.loadContaUsuarios = function () {
            ContaUsuarioFactory.list();
        };

        vm.getContaUsuarios = function () {
            return ContaUsuarioFactory.get();
        };
    }
})
();
