'use strict';

/* define the app */
var app = angular
	.module("quizApp", ['quizApp.services', 'ngResource'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/quiz-list.html', controller: app.QuizHome})
			.when('/quiz/:quizId', {templateUrl: 'partials/quiz-detail.html', controller: app.QuizDetail})
			.when('/quiz/:quizId/results', {templateUrl: 'partials/quiz-results.html', controller: app.QuizResults})
			.otherwise({redirectTo: '/'});
	}]);