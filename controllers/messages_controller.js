app.controller('MessagesController', function ($scope, MessagesService) {
  $scope.vw = {};
  $scope.vw.success = "Success!!";
  $scope.view = {};
  $scope.view.messages = MessagesService.all
})
