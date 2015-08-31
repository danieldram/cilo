var angular  = require('angular');

function messageArea () {
    return {
        restrict:'E',
        templateUrl: 'assets/partials/message-area.html',
        link:link,
    };

};


function link () {
    console.log('message area connected');
}


module.exports = messageArea;
