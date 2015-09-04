(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('AuthorCreateController', ['AuthorFactory', '$mdToast', AuthorCreateController]);

    /** @ngInject */
    function AuthorCreateController(AuthorFactory, $mdToast) {
        var vm = this;

        vm.create = function () {
            AuthorFactory.create(vm.author).then(function (response) {
                if (response.data.errors) {
                    vm.displayToast('error', response.data.errors[0].message);
                } else {
                    vm.displayToast('success', 'Author ' + vm.author.name + ' salvo com sucesso.');
                    vm.clear();
                }
            });
        };

        vm.clear = function () {
            vm.author = '';
        };

        vm.displayToast = function (type, msg) {
            $mdToast.show({
                template: '<md-toast class="md-toast ' + type + '">' + msg + '</md-toast>',
                hideDelay: 3000,
                position: 'top right'
            });
        };
    }
})();