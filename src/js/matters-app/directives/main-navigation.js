var angular = require ('angular');

function MainNavigation (){
    return {
        templateUrl: 'assets/partials/main-navigation.html',
        link:link,
        replace:true,
    };

};

function link (scope, element, attr){
    scope.log('Main Navigation Connected');
}

module.exports = MainNavigation;
