angular.module('myApp')
.service('PictureService', ['$http', function($http){
  this.fetch = () => {

    //HIDE THIS TOKEN
    return $http.jsonp('https://api.instagram.com/v1/users/1369016149/media/recent/?count=99&&callback=JSON_CALLBACK&access_token=1369016149.afe9a65.1b6ef1da7d8c4ea4abe76c450623bf13');
  };
}]);

