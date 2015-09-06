var angular = require('angular');


function isolateCheckbox(){

    return{
        restrict:'E',
        scope:{checkbox: "&checkbox"},
        link:link,
        templateUrl: 'assets/partials/isolate-checkbox.html',

    };
}

function link(scope, element, attr){
    console.log('isolate checkbox connected');
    console.log(scope.checkbox);
    scope.test = scope.checkbox();
    console.log(scope.test);


};

module.exports = isolateCheckbox;

