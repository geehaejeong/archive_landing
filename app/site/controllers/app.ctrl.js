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
		ctrl.instagram = instagram();

		ctrl.submitBtn = "Submit";

		// var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=439034.b9afd9e.9ff88211d74743b28ddce2ea0229e04b';

		function formBtn(){
			console.log('button');
			$state.go('form');
		}

		function homeBtn(){
			console.log('button');
			$state.go('home');
		}

		// function instagram(){
		// 	ctrl.$http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=439034.b9afd9e.9ff88211d74743b28ddce2ea0229e04b')
		// 	.success(function(res){
		// 		console.log(res.data);
		// 		ctrl.instagram = res.data.image.standard_resolution.url;
		// 	});


		function newForm(){
			var formData = {
				FirstName	: ctrl.firstName,
				LastName	: ctrl.lastName,
				Email		: ctrl.email,
				Phone		: ctrl.phone,
				PhoneType	: ,
				

			}
		}

		function submitTave(){
			ctrl.$http.post('https://tave.com/app/webservice/create-lead/d7cXdrT2', formData);
		}





















		

	};

})();



// <script>
// var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=439034.b9afd9e.9ff88211d74743b28ddce2ea0229e04b';
// var callback = function(res) {

// 	var instagram = '<div class="row">';
// 	for (var i = 0 ; i < 12 ; i++ ){
// 		instagram += '<div class="one-quarter"><a href="' + res.data.link + 'target="_blank"><img src="' + res.data[i].images.standard_resolution.url + '"></a></div>';
// 	};
// 	instagram+= '</div>';
// 	$('.instagram').append(instagram);
	
// };


// var options = {
// 	url: endpoint,
// 	dataType: 'jsonp',
// 	data: {},
// 	success: callback
// };

// $.ajax(options);
// </script>
