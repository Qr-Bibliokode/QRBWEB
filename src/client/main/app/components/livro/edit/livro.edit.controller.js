(function () {
    'use strict';

    angular
        .module('qrbweb')
        .controller('LivroEditController', ['AutorFactory', 'LivroFactory', '$stateParams', '$state', 'IdiomaFactory', 'CategoriaFactory', 'MessageFactory', LivroEditController]);

    /** @ngInject */
    function LivroEditController(AutorFactory, LivroFactory, $stateParams, $state, IdiomaFactory, CategoriaFactory, MessageFactory) {
        var vm = this;

        vm.livro = '';

        vm.update = function () {
            LivroFactory.update(vm.livro).then(function () {
                MessageFactory.success('Livro ' + vm.livro.titulo + ' editado com sucesso.');
                vm.clear();
                $state.transitionTo('livroList');
            }, function (response) {
                MessageFactory.grailsError(response.data);
            });
        };

        vm.loadLivro = function () {
            LivroFactory.getById($stateParams.id).then(function (result) {
                vm.livro = result.data;
            });
        };

        vm.clear = function () {
            vm.livro = '';
        };

        vm.loadLivro();

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
})
();
