var angular = require ('angular');

MattersCtrl.$inject = ['$scope','$filter', 'AppCore', 'AppData', 'AppMath', 'MattersData'];
function MattersCtrl ($scope, $filter, AppCore, AppData, AppMath, MattersData){

    $scope.log              = AppCore.log;
    $scope.log("Matters Ctrl Connected");

    $scope.mattersData              = MattersData;
    $scope.matters;

    $scope.filter                   = {};
    $scope.filter.clientName;
    $scope.filter.keyword;
    $scope.filter.hideClosed;
    $scope.filter.selectSingle;
    $scope.getCheckStatus = function(){ console.log('running'); return $scope.wtf;};

    $scope.mattersData.get().then(function(data){
        console.log(data);
        $scope.matters = data;

    });

};


module.exports = MattersCtrl;
