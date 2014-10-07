(function () {
	var app = angular.module('projects', ['all-prjcts']);

	app.controller('ProjectController', function () {
		this.item = prjcts;
	});

	app.directive('navigation', function () {
		return {
			restrict: 'E',
			templateUrl: 'nav.html'
		}
	});

	var prjcts = [
		{
			name: 'Little Caesars',
			description: 'Worked on developing an online ordering system for Little Caesars as a project for GA\'s UXDi course.',
			img: 'img/LC-phone.png',
			alt: 'LC Online Ordering demo gif image',
			id: 'mobile',
		},
		{
			name: 'Betabrand',
			description: 'Re-designed Betabrand\'s online shopping experience as a project for GA\'s UXDi course.',
			img: 'img/betabrand-mac.png',
			alt: 'Betabrand demo gif image',
			id: 'desktop',
		},
		{
			name: 'Smartwatch Concept',
			description: 'Personal project in Photoshop exploring what my ideal "smartwatch" would be like.',
			img: 'img/watch-nobg.png',
			alt: 'Betabrand demo gif',
			id: 'mobile',
		},
		{
			name: 'Smartwatch Concept',
			description: 'Personal project in Photoshop exploring what my ideal "smartwatch" would be like.',
			img: 'img/watch-nobg.png',
			alt: 'Betabrand demo gif',
			id: 'mobile',
		},
				];

})();