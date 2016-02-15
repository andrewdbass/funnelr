(function(){
	
	//var demos = {name: "Demos", goal: 2, color: "red"};
	var app = angular.module('funnel', ["firebase"]);
	app.controller('KpiController', ['$scope','$window', '$firebaseArray', '$firebaseObject', function($scope,$window,$firebaseArray, $firebaseObject){
	  var allData = new Firebase("https://brilliant-heat-8469.firebaseio.com/all_data");
	  var todaysData = new Firebase("https://brilliant-heat-8469.firebaseio.com/todays_data");
	  var ratioRef = new Firebase("https://brilliant-heat-8469.firebaseio.com/ratios");
	  var kpiRef = new Firebase("https://brilliant-heat-8469.firebaseio.com/kpis")

	  $scope.allData = $firebaseArray(allData);
	  $scope.todaysData = $firebaseArray(todaysData);
	  $scope.ratios = $firebaseArray(ratioRef);
	  $scope.kpis = $firebaseArray(kpiRef);
	 
	  this.showKpiForm = true;
	  this.showRatioForm = true;
	  $scope.master = {};
	  

      $scope.createKpi = function(kpi) {
        $scope.master = angular.copy(kpi);
        $scope.kpis.$add($scope.master);
        $scope.master.current = 0;
        $scope.todaysData.$add($scope.master);
        $scope.kpi = {};
      };
      $scope.hideKpiForm = function(){
      	this.kpiCtrl.showKpiForm = false;
      };

      $scope.hideRatioForm = function(){
      	this.kpiCtrl.showRatioForm = false;
      };

      $scope.reset = function() {
        $scope.kpi = {};
        $scope.master = {};
        this.showKpiForm= true;
        this.showRatioForm = true;
        
      };
      $scope.increaseKpi = function(button){
      	button.current = button.current + 1;
      };

      $scope.createRatio = function(ratio){
      	$scope.master = angular.copy(ratio);
        //ratioRef.push($scope.master);
        $scope.ratios.$add($scope.master);
      };
      $scope.saveDay = function(){
      	$window.alert("you saved the day!");
      	var day = new Date().toString();
      	var data = {date: day ,data: $scope.todaysData};
      	$scope.allData.$add(data);
      	$scope.todaysData = {};
      	$scope.hideRatioForm();
      	$scope.hideKpiForm();
      };


      $scope.reset();		
	}]);
})();



