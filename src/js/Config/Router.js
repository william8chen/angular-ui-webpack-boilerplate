'use strict';

require('angular-ui-router');

var RouterConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                views: {
                    "scaffolding": {
                        template: require('views/scaffolding.html')
                    },
                    "header@root": {
                        template: require('views/header.html')
                    }
                }
            })
            .state('root.home', {
                url: "/home",
                views: {
                    "content": {
                        template: require('views/Home/content.html'),
                        controller: 'HomeCtrl'
                    }
                }
            })
;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
};

module.exports = RouterConfig;