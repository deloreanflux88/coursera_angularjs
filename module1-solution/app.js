(function () {
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.itemsList = '';
  $scope.howMuchMessage = '';

  $scope.countAndDecide = function () {
    var count = 0;
    var countList = $scope.itemsList.split(',');
    
    //checkfor and filter out undefined and empty strings
    countList = countList.filter( 
       function(n){ 
         return (n != undefined && n != ""); 
     });
    count = countList.length;
    $scope.howMuchMessage = $scope.decide(count); 
  
  };
  
  $scope.decide = function(count){
    if(count <= 0){ 
       return "Please enter data first"; 
    }else if(count <= 3){
       return "Enjoy!"; 
    }else{
       return "Too much!"; 
    }
  }
}

})();
