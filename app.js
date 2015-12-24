(function(){
	
	//var demos = {name: "Demos", goal: 2, color: "red"};
	var app = angular.module('funnel', ["firebase"]);
	app.controller('KpiController', ['$scope','$window', '$firebaseArray', '$firebaseObject', function($scope,$window,$firebaseArray, $firebaseObject){
	  var kpiRef = new Firebase("https://brilliant-heat-8469.firebaseio.com/kpis");
	  
	  var ratioRef = new Firebase("https://brilliant-heat-8469.firebaseio.com/ratios");
	  $scope.kpis = $firebaseArray(kpiRef);
	  $scope.ratios = $firebaseArray(ratioRef);
	 
	  this.showForm = true;
	  $scope.master = {};
	  

      $scope.update = function(kpi) {
        $scope.master = angular.copy(kpi);
        $scope.master.current = 0;
        $scope.kpis.$add($scope.master);
        $scope.kpi = {};
      };
      $scope.hideForm = function(){
      	this.kpiCtrl.showForm = false;
      };

      $scope.reset = function() {
        $scope.kpi = {};
        $scope.master = {};
        
      };
      $scope.increaseKpi = function(button){
      	button.current = button.current + 1;
      };

      $scope.createRatio = function(ratio){
      	$scope.master = angular.copy(ratio);
        //ratioRef.push($scope.master);
        $scope.ratios.$add($scope.master);
      };

      $scope.reset();		
	}]);
})();



