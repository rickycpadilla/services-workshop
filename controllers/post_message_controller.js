app.controller('PostMessageController', function ($scope, MessagesService, $window) {
  $scope.vw = {};
  $scope.vw.success = "Success!!";
  $scope.form = {};
  $scope.submit = function(){
    var message = {};
    message.text = $scope.form.newmess
    MessagesService.add(message);
    $window.location.href = '/#/';
  }
  // $scope.submit($scope.form.message)
  // function(){
  //   console.log($scope.form.newmess);
  // }
})
