var angular = require ('angular');

MattersCtrl.$inject = ['$scope', 'AppCore', 'AppData', 'AppMath', 'MattersData'];
function MattersCtrl ($scope, AppCore, AppData, AppMath, MattersData){
    $scope.log          = AppCore.log;
    $scope.log("Matters Ctrl Connected");

    $scope.matters      = MattersData;

    $scope.matters.get().then(function(data){
       console.log(data);

    });

};


module.exports = MattersCtrl;
