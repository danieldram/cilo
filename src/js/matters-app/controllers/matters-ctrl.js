var angular = require ('angular');

MattersCtrl.$inject = ['$scope', 'AppCore', 'AppData', 'AppMath'];
function MattersCtrl ($scope, AppCore, AppData, AppMath){
    $scope.log = AppCore.log;

    $scope.log("Matters Ctrl Connected");


};


module.exports = MattersCtrl;
