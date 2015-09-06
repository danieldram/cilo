var angular  = require('angular');


function hideClosedMatters () {
 console.log('closed filter connected');


    return function(matter, scope){

        var filteredMessages = [];

        if(scope.$parent.filter.hideClosed){
            matter.map(function(obj){
                if(obj.status == 'open')
                filteredMessages.push(obj);
            });
          return filteredMessages;

        }else{

            return matter;

        }


    }
}


module.exports = hideClosedMatters;
