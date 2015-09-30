(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('FeriadoCreateController', ['FeriadoFactory', 'MessageFactory', '$filter', FeriadoCreateController]);

    /** @ngInject */
    function FeriadoCreateController(FeriadoFactory, MessageFactory, $filter) {
        var vm = this;

        vm.create = function () {
            vm.feriado.dataInicio = $filter('date')(vm.feriado.dataInicio, "yyyy-MM-dd HH:mm:ss.s");
            vm.feriado.dataFim = $filter('date')(vm.feriado.dataFim, "yyyy-MM-dd HH:mm:ss.s");
            FeriadoFactory.create(vm.feriado).then(function () {
                MessageFactory.success('Feriado ' + vm.feriado.descricao + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.feriado = '';
        };
    }
})();