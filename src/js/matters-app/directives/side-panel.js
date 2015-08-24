var angular = require ('angular');

function sidePanel () {
    return {
        templateUrl: 'assets/partials/side-panel.html',
        link:link,
        replace:true
    };
};

function link(scope, element, attr){
    scope.log('Side Panel Connected');
}

module.exports = sidePanel;
