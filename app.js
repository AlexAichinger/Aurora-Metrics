var app = angular.module('dashboard', []);
app.controller("homePageCtrl", function($scope, $log) {
  $scope.tabs = [
    {index: 0, name: "Dashboard", url: "templates/blank-page.html"},
    {index: 1, name: "Components", url: "templates/components.html"},
    {index: 2, name: "Bootstrap Elements", url: "templates/bootstrap-elements.html"}
  ];
  $scope.setTab = function(tabIndex){
    $scope.currentTab = $scope.tabs[tabIndex];
  }
  $scope.currentTab = $scope.tabs[0];
});
