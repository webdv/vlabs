angular.module('vlabs', ['ui.router', 'ngAnimate', 'toaster','omnibar' ,'v.terminal', 'vlabs.command.tools', 'vlabs.command.implementations', 'vlabs.command.filesystem'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/intro');
    $stateProvider
        .state('intro', {
            url: '/intro',
            templateUrl: 'course/intro.html',
            controller: 'introController'
        })
        .state('lab-1', {
        url: '/lab-1',
        templateUrl: 'course/level1/lab-1.html',
        controller: 'lab1Controller',
        })
  }])


