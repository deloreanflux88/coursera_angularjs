(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['MenuService'];
function UserService(MenuService) {
  var service = this;

  service.user = {
      firstname : '',
       lastname : '',
          email : '',
          phone : '',
        favorite: ''
  };

  service.getUser = function () {
    return service.user;
  };
  service.getUserDish = function () {
     return MenuService.getMenuItem(service.user.favorite);
  };

  service.setUser = function (formuser) {
    service.user = formuser;
  };

}



})();
