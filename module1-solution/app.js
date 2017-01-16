(function () {
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.itemsList = '';
  $scope.howMuchMessage = '';

  $scope.countAndDecide = function () {
    var countList = $scope.itemsList.split(',');
    
    //checkfor and filter out undefined and empty strings
    countList = countList.filter( 
       function(n){ 
         return (n != undefined && n != ""); 
     });
    $scope.howMuchMessage = $scope.decide(countList.length); 
  
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
