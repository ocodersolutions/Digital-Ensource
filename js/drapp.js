var drApp = angular.module('drApp',['ngRoute']);

drApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  console.log($routeProvider);
   $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
   });

	$routeProvider
        .when('/', {
            controller: 'mainCtrl',
            template: 'this is mainCtrl'
        })
        .when('/events_fairs', {
            controller: 'eventsCtrl',
            template: 'this is eventsCtrl'
        })
        .otherwise({
        	   redirectTo: '/'
        });
}]);
  

drApp.controller('mainCtrl', ['$scope', function($scope) {

}]);

drApp.controller('eventsCtrl', ['$scope','$location', function($scope,$location) {
 
}]);
