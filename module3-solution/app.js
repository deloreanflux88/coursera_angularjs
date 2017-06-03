(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath','https://davids-restaurant.herokuapp.com/');

function FoundItemsDirective(){
   var ddo = {
     templateUrl:'foundItems.html',
      scope: {
       found: '<',
       searchPerformed: '<',
       onRemove: '&'
     },
   };
   return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
   var narrow = this;
   narrow.searchPerformed = false;
   narrow.getSearchItems = function(searchTerm){
      narrow.found = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
      narrow.searchPerformed = true;
   };

   narrow.nothingFound = function(){
     return (typeof(narrow.found) != 'undefined' && narrow.found.length == 0);
   };

 narrow.removeItem = function (itemIndex) {
     narrow.found.splice(itemIndex,1);
 };

};

MenuSearchService.$inject= ['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    service.foundItems = [];
    //only run the search if a search term provided
    
    if( typeof(searchTerm) !== 'undefined' && 
        searchTerm.trim() != ""){
        searchTerm = searchTerm.trim().toLowerCase();

       $http({
         method: "GET",
         url: (ApiBasePath + "menu_items.json"),
         params: {
            search: searchTerm
         }
      }).then(function (response) {
         var menu_item = {};
         // loop through all the items and, for each item, do a simple check 
         // if the string being searched for by the user appears 
         // anywhere in the description of the item. 
         // If it does, that item gets placed in a special found array.
         for(var n in response.data.menu_items){
            menu_item = response.data.menu_items[n];
            if (menu_item.description.toLowerCase().indexOf(searchTerm) !== -1){ 
            service.foundItems.push(menu_item);
            }
         } 
      })
      .catch(function (error) {
         console.log(error);
      });
    }
      return service.foundItems; 
  }
}

})();
