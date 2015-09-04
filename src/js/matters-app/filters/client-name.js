var angular  = require('angular');


function clientName () {
    return function(value){
        value = 'wtf';
        return value;
    }
};


module.exports = clientName;
