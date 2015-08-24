

module.exports = angular.module('AppMath',[])
    .factory('AppMath', AppMath);

    function AppMath(){
        var appMath = {};

        appMath.VER = "0.0.1";
        appMath.CrossDivision;

        appMath.CrossDivide = function crossDivide(y1, y2, x1){
            return y2 / x1 * y1;
        };

        appMath.CrossMultiply = function crossDivide(y1, y2, x1){
            return x1 * y2 / y1;
        };

        /**
        * Used for calculating LatLng coordinate radius
        */
        appMath.HaverSine=function(metric, lat1, lon1, lat2, lon2){

            //Credit Andrew Hedges, andrew(at)hedges(dot)name
            //degrees to radius
            function deg2rad(deg) {
                rad = deg * Math.PI/180; // radians = degrees * pi/180
                return rad;
            }

            // round to the nearest 1/1000
            function round(x) {
                return Math.round( x * 1000) / 1000;
            }

            var t1, n1, t2, n2, dlat, dlon, a, c, dm, dk, mi, km;
            var Rm = 3961; // mean radius of the earth (miles) at 39 degrees from the equator
            var Rk = 6373; // mean radius of the earth (km) at 39 degrees from the equator

            //simplify math functions
            var sin = Math.sin;
            var cos = Math.cos;
            var exp = Math.pow;
            var atan2 = Math.atan2;
            var sqrt = Math.sqrt;


            // get values for lat1, lon1, lat2, and lon2
            t1 = lat1;
            n1 = lon1;
            t2 = lat2;
            n2 = lon2;

            // convert coordinates to radians
            lat1 = deg2rad(t1);
            lon1 = deg2rad(n1);
            lat2 = deg2rad(t2);
            lon2 = deg2rad(n2);

            // find the differences between the coordinates
            dlat = lat2 - lat1;
            dlon = lon2 - lon1;

            // here's the heavy lifting
            a  = exp(sin(dlat/2),2) + cos(lat1) * cos(lat2) * exp(sin(dlon/2),2);
            c  = 2 * atan2(sqrt(a), sqrt(1-a)); // great circle distance in radians
            dm = c * Rm; // great circle distance in miles
            dk = c * Rk; // great circle distance in km

            // round the results down to the nearest 1/1000
            mi = round(dm);
            km = round(dk);

            if(metric == "miles"){
                return mi;
            }else{
                return km;
            }


        };

        return appMath;



    }


