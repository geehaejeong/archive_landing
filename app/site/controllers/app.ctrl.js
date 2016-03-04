(function(){
		'use strict'

			angular
				.module('myApp')
				.controller('AppCtrl', AppCtrl);

	function AppCtrl($state){
		var ctrl = this;
		ctrl.formBtn = formBtn;
		ctrl.homeBtn = homeBtn;


		function formBtn(){
			console.log('button');
			$state.go('form');
		}

		function homeBtn(){
			console.log('button');
			$state.go('home');
		}



	};

})();



