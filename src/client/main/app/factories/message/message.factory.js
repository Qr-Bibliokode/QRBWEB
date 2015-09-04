(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('MessageFactory', ['$mdToast', MessageFactory]);

    function MessageFactory($mdToast) {
        return {
            show: function (type, msg) {
                $mdToast.show({
                    template: '<md-toast class="md-toast ' + type + '">' + msg + '</md-toast>',
                    hideDelay: 3000,
                    position: 'top right'
                });
            }
        };
    }
})();