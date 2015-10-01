(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AutorCreateController', ['AutorFactory', 'MessageFactory', AutorCreateController]);

    /** @ngInject */
    function AutorCreateController(AutorFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            AutorFactory.create(vm.autor).then(function () {
                MessageFactory.success('Autor ' + vm.autor.nome + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.autor = '';
        };
    }
})();