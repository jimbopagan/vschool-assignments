var app = angular.module('myApp');
/////“Powered by Dark Sky”

app.service('TemperatureService', ['$http', function ($http) {
    this.getTemp = function (lat, long) {
        var key = '4a81e51951c32b974e71fe933eff6269';
        return $http.jsonp('https://api.darksky.net/forecast/' + key + '/' + lat + '/' + long + '?callback=JSON+CALLBACK')
            .then(function (response) {
                var currentTemp = response.data.currently.temperature;
            })
    }

}])