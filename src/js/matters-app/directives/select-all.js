var angular = require('angular');

function selectAll () {
  return {
      restrict: 'A',
      link:link,
      require: 'ngModel',
  };

};

function link (scope, element, attr, ngModelCtrl){

    console.log('select all connected');

    ngModelCtrl.$parsers.push(function(value){

        scope.filter.selectSingle = value;

        return value;

    });

}

module.exports = selectAll;
