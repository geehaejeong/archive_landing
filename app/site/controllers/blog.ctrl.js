


(function(){
		'use strict'

			angular
				.module('myApp')
				.controller('BlogCtrl', BlogCtrl);




	function BlogCtrl($state, $http, $filter, $stateParams){
		var ctrl = this;
		ctrl.$http = $http;

		ctrl.getTumblr = getTumblr;


		function getTumblr(){
			ctrl.$http.get('http://localhost:8080/blog')
			.then(function(res){
		    	// console.log(res.data[0].slug);
		    	ctrl.tumblrPost = [];

				for (var i = 0 ; i < 8 ; i++ ){
					ctrl.tumblrPost.push(res.data[i]);
				console.log(ctrl.tumblrPost);
				}
			})
		}
		ctrl.getTumblr();




		
	};
})();