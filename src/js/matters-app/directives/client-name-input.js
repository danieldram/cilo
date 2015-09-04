var angular = require('angular');


function clientNameInput () {

    return {
        restrict: 'A',
        require: 'ngModel',
        link:link,

    };

};


function link(scope, element, attr, ngModelCtrl, $filter){
    console.log('client name input connected');
    console.log(ngModelCtrl);

     ngModelCtrl.$parsers.push(function(value){

        console.log(value);

        scope.matters.map(function(matter){
            if(matter.client_name.includes(value))
            scope.filter.clientName = value;
        });

        return value;
    });



}

module.exports = clientNameInput;
