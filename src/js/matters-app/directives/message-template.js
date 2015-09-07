var angular = require('angular');

function messageTemplate () {
  return {
      restrict:'E',
      scope: {
          checkbox:     '@checkbox',
          desc:         '@desc',
          number:       '@number',
          id:           '@id',
          status:       '=status',
          matter:       '=matter',
          matters:      '=matters',
          active:       "=active",
             },
      templateUrl: 'assets/partials/message-template.html',
      replace:true,
      link:link,
  };

};

function link(scope, attr, element){

    if(scope.checkbox == 'true') scope.test=true;
    if(scope.checkbox == 'false') scope.test=false;

    scope.handler = function (messageDetails) {
        console.log(messageDetails);
        console.log(scope.active);
        scope.active.number         = messageDetails.number;
        scope.active.status         = messageDetails.status;
        scope.active.description    = messageDetails.description;
        console.log(scope.active)

    }

}


module.exports = messageTemplate;
