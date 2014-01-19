var liveArticle = angular.module('liveArticle', []);

liveArticle.controller('liveArticleCtrl', function ($scope, $http, $interval) {

	var poll = function() {
		$http.get('data/article130.json').success(function(data) {

			console.log(data.title);

			$scope.article = data;
			
			$scope.jeroen = data.title;
		});
	}

	poll();

	var inter = $interval(poll, 3000);

});