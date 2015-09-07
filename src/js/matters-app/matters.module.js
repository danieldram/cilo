var angular = require('angular');

module.exports = angular.module('MattersApp', ['AppCore','AppMath','AppData'])

.controller('MattersCtrl',              require('./controllers/matters-ctrl.js'))


.directive('mainNavigation',            require('./directives/main-navigation.js'))
.directive('messageArea',               require('./directives/message-area.js'))
.directive('sidePanel',                 require('./directives/side-panel.js'))
.directive('clientNameInput',           require('./directives/client-name-input.js'))
.directive('selectAll',                 require('./directives/select-all.js'))
.directive('messageTemplate',           require('./directives/message-template.js'))
.directive('messageActions',            require('./directives/message-actions.js'))
.directive('isolateCheckbox',           require('./directives/isolate-checkbox.js'))

.filter('hideClosedMatters',            require('./filters/hide-closed-matters.js'))

.factory('MattersData',                 require('./factories/matters-data.js'))
.factory('IncludesPolyfill',            require('./factories/includes-polyfill.js'));
