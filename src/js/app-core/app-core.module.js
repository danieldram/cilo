
module.exports = angular.module('AppCore',[])

    .factory('AppCore', AppCore);

    function AppCore (){
        var quickDataStore = [];
        var appCore ={};
        var debug = true;

        appCore.VER = "0.0.1";
        appCore.mapArray;

        appCore.log = function(data){
           if(debug) console.log(data)
        };

        appCore.mapArray =function(arr, fn){
            for(var i = 0; i<arr.length; i++){
                 fn(arr[i], i);
            }
        };


        appCore.mapObj = function(obj, callback){
            var keys    = Object.keys(obj);
            var values  = [];

            for(var i = 0; i<keys.length; i++){
                values.push(obj[keys[i]]);
            }

            for(var i = 0; i<values.length; i++){
                callback(keys[i], values[i]);
            }
        };


        appCore.quickDataTransfer = function(){

            if(arguments[0] != undefined){
                quickDataStore = [];
                appCore.mapArray(arguments, function(arg){
                    quickDataStore.push(arg);
                    console.log(arg +"pushed");
                });
            }

            return quickDataStore;
        };

        return appCore;
    }

