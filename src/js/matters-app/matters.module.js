var angular = require('angular');

module.exports = angular.module('MattersApp', ['AppCore','AppMath','AppData'])

.controller('MattersCtrl',      require('./controllers/matters-ctrl.js'))


.directive('mainNavigation',     require('./directives/main-navigation.js'))
.directive('messageArea',        require('./directives/message-area.js'))
.directive('sidePanel',          require('./directives/side-panel.js'))

.factory('MattersData',          require('./factories/matters-data.js'));
