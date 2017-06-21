(function () {
'use strict';

angular.module('MenuApp')
.component('item', {
  templateUrl: 'src/menuapp/templates/itemsdetail.template.html',
  bindings: {
    items: '<'
  }
});

})();
