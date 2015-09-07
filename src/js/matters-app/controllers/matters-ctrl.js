var angular = require ('angular');

MattersCtrl.$inject = ['$scope','$filter', 'AppCore', 'AppData', 'AppMath', 'MattersData', 'IncludesPolyfill'];
function MattersCtrl ($scope, $filter, AppCore, AppData, AppMath, MattersData, IncludesPolyfill){

    $scope.log              = AppCore.log;
    $scope.log("Matters Ctrl Connected");

    $scope.mattersData              = MattersData;
    $scope.matters;

    $scope.active                   = {};
    $scope.active.number            = 'TEST';

    $scope.filter                   = {};
    $scope.filter.clientName;
    $scope.filter.keyword;
    $scope.filter.hideClosed;
    $scope.filter.selectSingle;


    $scope.mattersData.get().then(function(data){
        console.log(data);
        $scope.matters = data;

    });

};


module.exports = MattersCtrl;
