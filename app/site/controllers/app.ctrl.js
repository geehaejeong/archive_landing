(function(){
		'use strict'

			angular
				.module('myApp')
				.controller('AppCtrl', AppCtrl);




	function AppCtrl($state, $http){
		var ctrl = this;
		ctrl.$http = $http;

		ctrl.formBtn = formBtn;
		ctrl.homeBtn = homeBtn;
		ctrl.submitBtn = "Submit";
		ctrl.instagram = instagram;

		var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3047809982.c916a8f.c652358bace74d41acbe9715263f440a&callback=JSON_CALLBACK';

		function formBtn(){
			console.log('button');
			$state.go('form');
		}

		function homeBtn(){
			console.log('button');
			$state.go('home');
		}


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

      


      
