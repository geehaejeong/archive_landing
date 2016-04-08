'use strict';

var app = angular.module('myApp',['ui.router']);

app.config(function($httpProvider, $urlRouterProvider, $stateProvider, $locationProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home',{
		url: '/',
		templateUrl: 'site/partials/home.html',
		controller: 'AppCtrl as ctrl'
		
	})
	.state('form',{
		url: '/form',
		templateUrl: 'site/partials/form.html',
		controller: 'AppCtrl as ctrl'
	})

 
	$locationProvider.html5Mode(true);

});

