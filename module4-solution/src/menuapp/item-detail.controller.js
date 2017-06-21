(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['items'];
function ItemDetailController( items) {
  var category = this;
  category.items = items.data.menu_items;
}

})();
