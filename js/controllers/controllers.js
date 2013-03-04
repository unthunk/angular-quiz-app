'use strict';

/* Controllers */

app
	.controller('QuizHome',function($scope, $http){
		$http.get('/quizzes/quiz.json',{cache: true}).
		success(function(data, status, headers, config) {
			$scope.quizzes = data;
		});
	})
	.controller('QuizDetail',function($scope, $routeParams, Quiz, QuizForm) {
		$scope.quizForm = QuizForm;
		$scope.quizzes = Quiz.query();
		$scope.quiz = Quiz.get({quizId: $routeParams.quizId}, function(quiz) {});
	})
	.controller('QuizResults',function($scope, $location,$routeParams, Quiz, QuizForm){
		if(!QuizForm.quizAnswer) {
			$location.path('quiz/'+$routeParams.quizId).replace();
		}
		else {
			$scope.quiz = Quiz.get({quizId: $routeParams.quizId}, function(quiz) {});
			$scope.quizForm = QuizForm;
			$scope.quizId = $routeParams.quizId;
		}
	})
	.controller('QuizCtrl',function($scope,$location,$routeParams,Quiz,QuizForm){
		$scope.quizForm = QuizForm;
		$scope.quizAnswer = QuizForm.quizAnswer;
		$scope.lorem = QuizForm.lorem;
		$scope.submit = function() {
			$location.path($location.path()+"/results");
		};
	});