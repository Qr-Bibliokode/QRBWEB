(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('IdiomCreateController', ['IdiomFactory', 'MessageFactory', IdiomCreateController]);

    /** @ngInject */
    function IdiomCreateController(IdiomFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            IdiomFactory.create(vm.idiom).then(function () {
                MessageFactory.success('Idioma ' + vm.idiom.description + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.idiom = '';
        };
    }
})();