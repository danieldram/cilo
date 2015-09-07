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

    ngModelCtrl.$parsers.push(function(value){
        console.log(value);
        if(value=="close")
        scope.matter.status = "closed";

        console.log(scope.matter);

    });



}

module.exports = messageActions;
