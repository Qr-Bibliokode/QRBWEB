(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoriaCreateController', ['CategoriaFactory', 'MessageFactory', CategoriaCreateController]);

    /** @ngInject */
    function CategoriaCreateController(CategoriaFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            CategoriaFactory.create(vm.categoria).then(function () {
                MessageFactory.success('Categoria ' + vm.categoria.descricao + ' salva com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.categoria = '';
        };
    }
})();