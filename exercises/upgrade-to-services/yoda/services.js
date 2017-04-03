var app = angular.module('myApp');

app.service('httpService', ['$http', function ($http) {
    this.test = 'hey from service'
    
    this.myFunc = function (speak) {

        var req = {
            method: 'GET',
            url: "https://yoda.p.mashape.com/yoda?sentence= " + speak,
            headers: {
                "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
            }
        }
        return $http(req)
    }

}])