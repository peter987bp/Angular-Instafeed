angular.module('myApp') // attach a controller to the module
.controller( 'myController', [
  '$scope',
  'PictureService',
  ($scope, PictureService) => {

  $scope.pictures = [];
  PictureService.fetch().success((pictures) => {
    // $scope.pictures = pictures;
    console.log('pictures: ', pictures);
   $scope.pictures= pictures;


  });



}]);