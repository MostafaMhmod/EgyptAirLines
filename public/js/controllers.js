// Main Controller
myApp.controller('mainController',function mainController($scope) 
{
	
});
// Home Controller
myApp.controller('homeController',function homeController($scope) 
{

});
// viewFlights Controller
myApp.controller('flightsController',function flightsController($scope, $http) 
{

	$http({
	    	method: 'GET',
	    	url: '/api/flights/'
		}).then(function successCallback(response) {
	   	 	
	   	 	if(response == false)
	   	 	{
	   	 		// JUMP TO FLIGHTS page
	   	 	}

	   	 	$scope.flights = response.data;
	   	 	console.log(response.data);
	   	 	console.log("Done");
		}, function errorCallback(response) {
	    	console.log(response);
		});

	$scope.submit = function()
	{
		var origin = $scope.origins;
		var destination = $scope.destinations;
		var ticketclass = $scope.classticket;
		var departingDate = $scope.departingdate; 
		var returningDate = $scope.returningDate;

		$http({
	    	method: 'GET',
	    	url: '/api/flights/search/' + origin + '/' + destination + '/' + departingDate + '/' + returningDate  + '/' + ticketclass + '/'
		}).then(function successCallback(response) {
	   	 	
	   	 	if(response == false)
	   	 	{
	   	 		// JUMP TO FLIGHTS page
	   	 	}

	   	 	$scope.flights = response.data;
	   	 	console.log(response.data);
	   	 	console.log("Done");
		}, function errorCallback(response) {
	    	console.log(response);
		});
	}
	

});
// Track a flight Controller
myApp.controller('trackFlightController',function trackFlightController($scope) 
{

});
// Boarding Controller
myApp.controller('boardingController',function boardingController($scope ) 
{

});
// About Controller
myApp.controller('aboutController',function aboutController($scope) 
{

});
// Confirm Controller
myApp.controller('confirmController',function confirmController($scope) 
{

});