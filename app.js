(function(){
	
	//var demos = {name: "Demos", goal: 2, color: "red"};
	var app = angular.module('funnel', ["firebase"]);
	app.controller('KpiController', ['$scope','$window', '$firebaseObject', function($scope,$window,$firebaseObject){
	  
	 

	  this.kpiArray = [{name: "hello"}];
	  this.ratioArray = [];
	  this.showForm = true;
	  $scope.master = {};
	  

      $scope.update = function(kpi) {
        $scope.master = angular.copy(kpi);
        $scope.master.current = 0;
        this.kpiCtrl.kpiArray.push($scope.master);
        $scope.kpi = {};
      };
      $scope.hideForm = function(){
      	this.kpiCtrl.showForm = false;
      };

      $scope.reset = function() {
        $scope.kpi = {};
        $scope.master = {};
        this.kpiCtrl.kpiArray = [];
      };
      $scope.increaseKpi = function(button){
      	button.current = button.current + 1;
      };

      $scope.createRatio = function(ratio){
      	$scope.master = angular.copy(ratio);
      	this.kpiCtrl.ratioArray.push($scope.master);
      };

      $scope.reset();		
	}]);
})();



