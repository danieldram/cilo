/**
* The AppCore module serves as a place to hold super generic arrays and services
* that can be injected and used in multiple applications
*/



module.exports = angular.module('AppCore',[])

    .factory('AppCore', AppCore);

    function AppCore (){
        var quickDataStore = [];
        var appCore ={};

        appCore.VER = "0.0.1";
        appCore.mapArray;

        /**
         * When set to true, all comments and debugging notes will display in the console from each
         * executed function. This will also include the name of the function initiated the log.
         * @constructor
         * @param {array} Array - An array of elements.
         * @param {function} Function - A function that will be executed on each element in the provided array
         * @example
         * var arr = [1,2,3,4,5];
         * function dbl(x) {return x*2;}
         * $scope.doubled.push( AppCore.mapArray(arr, dbl));
         * //$scope.doubled = [2, 4, 6, 8, 10]
         */
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

        /**
        * The quickDataTransfer() method will quickly transfer data between two different controllers.
        * It is not intended for presistence or heavy use. It mainly is used for communicating state.
        */

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

