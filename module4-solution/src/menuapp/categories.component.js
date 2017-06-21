(function () {
'use strict';

angular.module('MenuApp')
.component('category', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
