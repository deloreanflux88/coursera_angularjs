(function () {
"use strict";

angular.module('public')
.controller('MyFavoriteController', MyFavoriteController);

MyFavoriteController.$inject = ['MenuService','ApiPath'];
function MyFavoriteController(MenuService,ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.menuItem = $ctrl.favoriteMenuItem;

}

})();
