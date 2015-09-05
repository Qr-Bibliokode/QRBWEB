(function () {
    'use strict';

    angular
        .module('qrbweb')
        .factory('MessageFactory', ['$mdToast', MessageFactory]);

    function MessageFactory($mdToast) {

        function showMessage(type, msg) {
            $mdToast.show({
                template: '<md-toast class="md-toast ' + type + '">' + msg + '</md-toast>',
                hideDelay: 3000,
                position: 'top right'
            });
        }

        return {
            error: function (msg) {
                showMessage('error', msg)
            },
            success: function (msg) {
                showMessage('success', msg)
            },
            grailsError: function (data) {
                showMessage('error', data.errors[0].message)
            }
        };
    }
})();