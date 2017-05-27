var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })

    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })

    $routeProvider.when('/flights', {
        templateUrl: 'views/viewFlights.html',
        controller: 'flightsController'
    });

    $routeProvider.when('/flight', {
        templateUrl: 'views/flight.html',
        controller: 'flightController'
    });

    $routeProvider.when('/trackflight', {
        templateUrl: 'views/trackFlight.html',
        controller: 'trackFlightController'
    });

    $routeProvider.when('/booking', {
        templateUrl: 'views/confirm.html',
        controller: 'confirmController'
    });

    $routeProvider.when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'confirmController'
    });

    $routeProvider.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'
    });
    $routeProvider.otherwise({
    redirectTo: '/'
    });
});
