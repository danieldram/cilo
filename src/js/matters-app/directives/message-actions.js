var angular = require('angular');

function messageActions () {

    return {
        restrict: 'A',
        link:link,
        require:'ngModel',

    };

};


function link (scope, element, attr, ngModelCtrl) {
   console.log('message action connected');


}

module.exports = messageActions;
