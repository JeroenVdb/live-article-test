var liveArticle = angular.module('liveArticle', []);

liveArticle.controller('liveArticleCtrl', function ($scope, $http) {
	$http.get('data/article130.json').success(function(data) {
		$scope.article = data;
	});
});