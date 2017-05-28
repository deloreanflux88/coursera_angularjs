(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingList) {
  var list = this;

  list.items = ShoppingList.getToBuyItems();

  list.buyItem = function (itemIndex) {
    ShoppingList.buyItem(itemIndex);
  };

  list.isEmpty = function(){
     return (list.items.length <= 0);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingList) {
  var list = this;
  list.items = ShoppingList.getBoughtItems();

  list.isEmpty = function(){
     return (list.items.length <= 0);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
   { name : "packs of gnocci" , quantity: 2},
   { name : "pint of heavy cream" , quantity: 1},
   { name : "cherry tomatoes" , quantity: 15},
   { name : "bunch of basil" , quantity: 1},
   { name : "chicken thighs" , quantity: 4},
   { name : "bottle of cooking sherry" , quantity: 1}
  ];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems.splice(itemIndex, 1).pop());
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}


})();
