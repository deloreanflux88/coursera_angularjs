(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (item) {
     var config = {};
     if(item){
         item = item.toUpperCase();
         return $http.get(ApiPath + '/menu_items/' + item + '.json', config)
         .then(
          // success
           function (response) {
             return response.data;
           }
          /*     ,
         // error
           function errorCallback(response){
                // do stuff with 500/404 etc errors...

          }*/
        );
    }

  };

}

})();
