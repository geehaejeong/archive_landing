


(function(){
		'use strict'

			angular
				.module('myApp')
				.controller('BlogCtrl', BlogCtrl);




	function BlogCtrl($state, $http, $filter){
		var ctrl = this;
		ctrl.$http = $http;

		ctrl.getTumblr = getTumblr;


		function getTumblr(){
			ctrl.$http.get('http://localhost:8080/blog')
			.then(function(res){
		    	console.log(res);
			})
		}
		ctrl.getTumblr();






		
	};
})();