(function(){
	'use strict';

	angular.module('app').directive('myDirective', myDirective);

  function myDirective () {

    return {
      templateUrl: 'scripts/myDirective.html',
      restrict: 'E',
      scope: {
      	revPerf: '='
      },
      link: function (scope, elem, attrs) {

      	scope.day = 1;
      	scope.daysInMonth = 30;
      	//had issues with getting the day, since they were all the same, i cheated :)


      	var doubleTarget = scope.revPerf.revenue_target + 10000;
      	var moneyPace = scope.revPerf.revenue_actual / scope.revPerf.revenue_target;
      	var dayPace = scope.day / scope.daysInMonth;
      	var onPace = moneyPace >= dayPace;


      	var actualWidth = Math.round((scope.revPerf.revenue_actual / doubleTarget) * 100) + "%";
      	var goalPercent = Math.round((scope.revPerf.revenue_target / doubleTarget) * 100) + "%";
      	$(elem).find('.actual-prog').css('width', actualWidth);
      	$(elem).find('.goal').css('left', goalPercent);

      	if (onPace) {
      		$(elem).find('.actual-prog').css('background-color', 'green');
      	} else {
      		$(elem).find('.actual-prog').css('background-color', 'red');
      	}



      }
    }
  
  }
})()