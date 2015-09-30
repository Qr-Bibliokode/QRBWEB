(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomaCreateController', ['IdiomaFactory', 'MessageFactory', IdiomaCreateController]);

    /** @ngInject */
    function IdiomaCreateController(IdiomaFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            IdiomaFactory.create(vm.idioma).then(function () {
                MessageFactory.success('Idioma ' + vm.idioma.descricao + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.idioma = '';
        };
    }
})();