var angular = require('angular');

function messageActions () {

    return {
        restrict: 'A',
        link:link,
        require:'ngModel',

    };

};


function link (scope, element, attr, ngModelCtrl) {
    console.log('message action connected');

    ngModelCtrl.$parsers.push(function(value){

        if(value=="close")
        scope.matter.status = "closed";
        scope.active.status = "closed";

        if(value=="delete"){
            scope.active.number      = null;
            scope.active.status      = null;
            scope.active.description = null;

            scope.matters.map(function(matter){
                var index=0;
                matter.matters.map(function(item){
                    index++;
                    if(item.number == scope.matter.number){

                        matter.matters.splice(index-1, 1);

                    }
                });

            });

        }

    });



}

module.exports = messageActions;
