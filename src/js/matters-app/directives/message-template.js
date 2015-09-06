var angular = require('angular');

function messageTemplate () {
  return {
      restrict:'E',
      scope: {
          checkbox: '@checkbox',
          desc:     '@desc',
          number:   '@number',
          id:       '@id',
          status:   '=status'
             },
      templateUrl: 'assets/partials/message-template.html',
      replace:true,
      link:link,
  };

};

function link(scope, attr, element){
    console.log(scope.checkbox);
    if(scope.checkbox == 'true') scope.test=true;
    if(scope.checkbox == 'false') scope.test=false;


}


module.exports = messageTemplate;
