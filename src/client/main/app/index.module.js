angular

    .module('qrbweb', ['ui.router', 'md.data.table', 'ngMaterial', 'monospaced.qrcode'])

    .config(function ($mdDateLocaleProvider) {
        $mdDateLocaleProvider.months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        $mdDateLocaleProvider.shortMonths = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        $mdDateLocaleProvider.days = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
        $mdDateLocaleProvider.shortDays = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

        $mdDateLocaleProvider.firstDayOfWeek = 1;

        $mdDateLocaleProvider.parseDate = function (dateString) {
            return new Date(dateString);
        };

        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('DD-MM-YYYY');
        };
    });
