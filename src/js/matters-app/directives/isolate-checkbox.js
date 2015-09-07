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

    scope.test = scope.checkbox();



};

module.exports = isolateCheckbox;

