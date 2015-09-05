(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('CategoryCreateController', ['CategoryFactory', 'MessageFactory', CategoryCreateController]);

    /** @ngInject */
    function CategoryCreateController(CategoryFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            CategoryFactory.create(vm.category).then(function () {
                MessageFactory.success('Categoria ' + vm.category.description + ' salva com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.category = '';
        };
    }
})();