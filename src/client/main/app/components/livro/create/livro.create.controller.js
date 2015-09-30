(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LivroCreateController', ['AutorFactory', 'LivroFactory', 'IdiomaFactory', 'CategoriaFactory', 'MessageFactory', LivroCreateController]);

    /** @ngInject */
    function LivroCreateController(AutorFactory, LivroFactory, IdiomaFactory, CategoriaFactory, MessageFactory) {
        var vm = this;

        vm.create = function () {
            LivroFactory.create(vm.livro).then(function () {
                MessageFactory.success('Livro ' + vm.livro.titulo + ' salvo com sucesso.');
                vm.clear();
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.clear = function () {
            vm.livro = '';
            console.log(vm.livro.autores)
        };

        vm.loadAutores = function () {
            AutorFactory.list();
        };

        vm.getAutors = function () {
            return AutorFactory.get();
        };

        vm.loadCategories = function () {
            CategoriaFactory.list();
        };

        vm.getCategories = function () {
            return CategoriaFactory.get();
        };

        vm.loadIdiomas = function () {
            IdiomaFactory.list();
        };

        vm.getIdiomas = function () {
            return IdiomaFactory.get();
        };
    }
})();