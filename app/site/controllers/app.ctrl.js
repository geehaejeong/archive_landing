(function(){
		'use strict'

			angular
				.module('myApp')
				.controller('AppCtrl', AppCtrl);




	function AppCtrl($state, $http, $filter){
		var ctrl = this;
		ctrl.$http = $http;

		ctrl.formBtn = formBtn;
		ctrl.homeBtn = homeBtn;
		ctrl.momsBabesBtn = momsBabesBtn;

		ctrl.instagram = instagram;
		ctrl.todaysDate = todaysDate;
		ctrl.hello = "hello";

	

		function todaysDate(){
			ctrl.date = new Date();
			ctrl.today = $filter('date')(new Date(), 'MMM/dd');
		}
		ctrl.todaysDate();


		// BUTTONS
		function formBtn(){
			$state.go('form');
		}
		function homeBtn(){
			$state.go('home');
		}
		function momsBabesBtn(){
			$state.go('momsandbabes');
		}

		// INSTAGRAM
		var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3047809982.c916a8f.c652358bace74d41acbe9715263f440a&callback=JSON_CALLBACK';
		function instagram(){
			ctrl.$http.jsonp(endpoint).
			success(function(res){
			ctrl.instagramImg = [];

				for (var i = 0 ; i < 8 ; i++ ){
					ctrl.instagramImg.push(res.data[i]);
				}

			console.log(ctrl.instagramImg);
			});
		}
		ctrl.instagram();
		
		ctrl.object = [{name: 'gee', age:2},{name:'ron', age:3}];
		console.log(ctrl.object);
	};

	

})();

      


      
