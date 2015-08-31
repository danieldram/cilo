var angular = require ('angular');

MattersCtrl.$inject = ['$scope', 'AppCore', 'AppData', 'AppMath', 'MattersData'];
function MattersCtrl ($scope, AppCore, AppData, AppMath, MattersData){

    $scope.log              = AppCore.log;
    $scope.log("Matters Ctrl Connected");

    $scope.mattersData      = MattersData;
    $scope.matters;

    $scope.mattersData.get().then(function(data){
       $scope.matters = data;

    });

};


module.exports = MattersCtrl;
