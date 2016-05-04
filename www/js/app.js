    angular.module('myApp', ['ionic'] )
    .run(function($ionicPlatform){
        $ionicPlatform.ready(function(){
            if(window.cordova && window.cordova.plugins &&window.cordova.plugins.Keyboard){
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.statueBar){
                statueBar.styleDefault();
            }
        });
    })


    .config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    .state('tab.home', {
        url: '/home',
        views: {
            'home': {
                templateUrl: 'templates/home.html',
                controller: 'flightsController'

            }
        }
    })

    .state('tab.flights', {
        url: '/flights',
        views: {
            'viewFlights': {
                templateUrl: 'templates/viewFlights.html',
                controller: 'flightsController'
            }
        }
        
    })

    .state('tab.trackflight', {
        url: '/trackflight',
        views: {
            'trackFlight': {
                templateUrl: 'templates/trackFlight.html',
                controller: 'flightsController'
            }
        }
    })


    .state('tab.confirm', {
        url: '/confirm',
        views: {
            'confirm': {
                templateUrl: 'templates/confirm.html',
                controller: 'flightsController'
            }
        }
    })

    .state('tab.about', {
        url: '/about',
        views: {
            'confirm': {
                templateUrl: 'templates/about.html',
                controller: 'flightsController'
            }
        }
    });
    $urlRouterProvider.otherwise('/tab/home');
});
