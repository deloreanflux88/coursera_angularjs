(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService','MenuService','user'];
function MyInfoController(UserService, MenuService, user) {
  var $ctrl = this;
  $ctrl.completed = false;
  $ctrl.user = user;
  $ctrl.invalidmenunumber = true;

  $ctrl.register = function(){
      MenuService.getMenuItem($ctrl.user.favorite.toUpperCase())
      .then(function(response){
          $ctrl.invalidmenunumber = false;
          UserService.setUser($ctrl.user);
          $ctrl.completed = true;
      })
      .catch(function(){
          $ctrl.invalidmenunumber = true;
      }
      );

  }
}


})();
