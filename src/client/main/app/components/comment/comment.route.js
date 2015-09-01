(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('comment', {
                url: '/comment',
                templateUrl: 'app/components/comment/comment.tabs.html'
            })
            .state('commentCreate', {
                parent: 'comment',
                views: {
                    "tabComment": {
                        templateUrl: 'app/components/comment/create/comment.create.html',
                        controller: 'CommentCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('commentEdit', {
                parent: 'comment',
                views: {
                    "tabComment": {
                        templateUrl: 'app/components/comment/edit/comment.edit.html',
                        controller: 'CommentEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('commentList', {
                parent: 'comment',
                views: {
                    "tabComment": {
                        templateUrl: 'app/components/comment/list/comment.list.html',
                        controller: 'CommentListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
