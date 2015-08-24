module.exports = angular.module("AppData", ['AppCore'])
    .factory("AppData", AppData);

    AppData.$inject = ['$http', '$q', 'AppCore'];
    function AppData($http, $q, AppCore){

        var appData     = {};
        var mapArray    = AppCore.mapArray;

        appData.json = function(url){

            var args = Array.prototype.slice.call(arguments);


            if(Gen.TypeCheck.call(args[0], String)){

                return function(coords){
                    var data    = $q.defer();
                    var query   = args[0];
                    console.log(query);
                    if(coords){
                        mapArray(coords, function(coord){

                            query = query.replace('[d]', coord);
                        });
                    }
                     console.log(query);
                    $http.jsonp(query)
                         .success(function(response) {

                            data.resolve(response);

                        });

                    return data.promise;
                };
            }
        }

            appData.post = function(url){

                return function(dataObj){
                    var data = $q.defer()

                    $http.post(url, JSON.stringify(dataObj)).
                      then(function(response) {
                        data.resolve(response);
                      }, function(response) {
                        data.reject(response)
                      });

                    return data.promise;
                }
            };


            appData.xhr = function(url){

                return function(coordinates){
                    var data = $q.defer();
                    var xhr = new XMLHttpRequest();

                    xhr.onload = function(){data.resolve(this.responseText)};

                    xhr.open("get", url, true);
                    xhr.setRequestHeader("X-Requested-With", "XMLHTTPREQUEST");

                    xhr.send();

                    return data.promise;
                    }
                };

            appData.get = function(url){

                var args = Array.prototype.slice.call(arguments);

                return function(coords){
                    var data    = $q.defer();
                    var query   = args[0];
                    console.log(query);
                    if(coords){
                        mapArray(coords, function(coord){

                            query = query.replace('[d]', coord);
                        });
                    }
                     console.log(query);
                    $http.get(query)
                         .success(function(response) {

                            data.resolve(response);

                        });

                    return data.promise;
                };
            };



        return appData;

    }


