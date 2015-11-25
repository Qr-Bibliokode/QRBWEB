(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('ResourcesFactory', [ResourcesFactory]);

    /** @ngInject */
    function ResourcesFactory() {
        var frontendService = 'http://localhost:3000/';
        var webservice = 'http://localhost:8080/';

        return {
            DOMAIN_SERVER: frontendService,
            CONTAUSUARIO_API: frontendService + 'contaUsuarios/',
            SWAGGER: webservice + 'swagger/swagger.json'
        };
    }
})();
