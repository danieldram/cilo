var angular = require('angular');

MattersData.$inject = ['AppData']
function MattersData (AppData) {
    var md = {};
    md.get = AppData.get('assets/js/matters.json');

    return md;

}

module.exports = MattersData;
