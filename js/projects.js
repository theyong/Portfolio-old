 (function () {
 	var app = angular.module('all-prjcts', []);

 	app.directive('projectPanels', function () {
 		return {
 			restrict: 'E',
 			templateUrl: 'project-panels.html',
 			controller: function ($scope) {
 				this.tab = 0;
 				this.panelId = 'panel0';
 				this.panelVar = 1;
 				this.workYN = function () {
 					if (this.tab > 0 && this.tab < 4) {
 						return 1;
 					}
 					return 0;
 				};
 				this.selectTab = function (setTab) {
 					this.tab = setTab;
 					this.panelId = 'panel' + this.tab;
 					console.log(this.panelId);
 					console.log('Current Tab: ' + setTab);
 				};
 				this.nextTab = function () {
 					if (this.tab < 5) {
 						this.tab = (this.tab + 1);
 						this.panelId = 'panel' + this.tab;
 						console.log(this.panelId);
 						console.log('Current Tab: ' + this.tab);
 					};
 				};
 				this.prevTab = function () {
 					if (this.tab > 0) {
 						this.tab = (this.tab - 1);
 						this.panelId = 'panel' + this.tab;
 						console.log(this.panelId);
 						console.log('Current Tab: ' + this.tab);
 					};
 				};
 				this.showOrHide = function (arrowDirection) {
 					if (arrowDirection == 1 && this.tab == 0) {
 						return 0;
 					}
 					if (arrowDirection == 2 && this.tab == 5) {
 						return 0;
 					}
 					return 1;
 				};
 				this.isSelected = function (checkTab) {
 					return this.tab === checkTab;
 				};
 			},
 			controllerAs: 'panel',
 		}
 	});
 })();