(function () {
"use strict";

angular.module('public')
.component('favorite', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    favoriteMenuItem: '<'
  },
  controller: MyFavoriteController,
  controllerAs: '$ctrl'
});

MyFavoriteController.$inject = ['MenuService','ApiPath'];
function MyFavoriteController(MenuService,ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.menuItem = $ctrl.favoriteMenuItem;

}

})();
