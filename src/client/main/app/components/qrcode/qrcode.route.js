(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('qrCodeList', {
                url: '/qrcode/listagem',
                templateUrl: 'app/components/qrcode/list/qrcode.list.html',
                controller: 'qrcodeListController',
                controllerAs: 'vm'
            })
    }
})();
