(function(){
		'use strict'

			angular
				.module('myApp')
				.controller('AppCtrl', AppCtrl);

	function AppCtrl($state){
		var ctrl = ctrl;
		ctrl.$state = $state;


		function formBtn(){
			console.log('button');
			ctrl.$state.go('form');
		}




	};

})();



