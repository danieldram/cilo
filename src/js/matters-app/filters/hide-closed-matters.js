var angular  = require('angular');


function hideClosedMatters () {
 console.log('closed filter connected');


    return function(matter, scope){

        var arr = [];
        console.log(scope);
        if(scope.$parent.filter.hideClosed){
            matter.map(function(obj){
                if(obj.status == 'open')
                arr.push(obj);
            });
          return arr;

        }else{

            return matter;

        }


    }
}


module.exports = hideClosedMatters;
