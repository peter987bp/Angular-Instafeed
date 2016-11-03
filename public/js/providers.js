angular.module('myApp')
.provider('Pictures', function(){
  // configurable properties
  //   (can be configured in module .config as MoviesProviders)

  this.endpoint = '';
  this.setEndpoint = (endpoint) => {
    this.endpoint = endpoint;
  };

  // the SERVICE part of this Provider
  // is ALWAYS attached to $get
  this.$get = ['$http', function($http){
    const configuredEndpoint = this.endpoint;

    return {
      getPictures : () => {
        return $http.get( configuredEndpoint );
      }
    };

  }];

});