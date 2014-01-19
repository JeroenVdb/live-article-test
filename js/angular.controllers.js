var liveArticle = angular.module('liveArticle', []);

liveArticle.controller('liveArticleCtrl', function ($scope, $http, $interval) {

	var polling = function() {
		$http.get('data/article130.json')
			.success(renderLiveArticle);
	}

	var renderLiveArticle = function(data) {

		$scope.article = data;
			
		$scope.jeroen = data.title;

	}

	var renderTitle = function(data) {
		// all scopes for the title
	}

	var renderHighlights = function(data) {
		// all scopes for the highlights
	}

	var renderScoreboard = function(data) {
		// all scopes for live football scoreboard
	}

	polling();

	var pollingInterval = $interval(polling, 3000);

});