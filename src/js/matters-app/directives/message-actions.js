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
        console.log(value);
        if(value=="close")
        scope.matter.status = "closed";

        if(value=="delete"){
            console.log(scope.matter);
            console.log(scope.matters);

            scope.matters.map(function(matter){
                var index=0;
                matter.matters.map(function(item){
                    index++;
                    if(item.number == scope.matter.number){
                        console.log('found you @ ' + index);
                        matter.matters.splice(index-1, 1);
                        console.log(matter.matters);
                    }
                });

            })



        }



    });



}

module.exports = messageActions;
