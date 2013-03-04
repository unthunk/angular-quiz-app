'use strict';

/* Services */

angular
	.module('quizApp.services', ['ngResource'])
	.factory('Quiz', function($resource){
		return $resource('quizzes/:quizId.json', {}, {
			query: {method:'GET', params:{quizId:'quiz'}, isArray:true}
		});
  	});

app
	.factory('QuizForm', function() {
		return {
			quizAnswer: null,
		}
	});