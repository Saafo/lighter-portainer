angular.module('portainer.docker').controller('ImportImageController', [
  '$scope',
  '$state',
  'ImageService',
  'Notifications',
  'HttpRequestHelper',
  function ($scope, $state, ImageService, Notifications, HttpRequestHelper) {
    $scope.state = {
      actionInProgress: false,
    };

    $scope.formValues = {
      UploadFile: null,
      NodeName: null,
    };

    $scope.uploadImage = function () {
      $scope.state.actionInProgress = true;

      var nodeName = $scope.formValues.NodeName;
      HttpRequestHelper.setPortainerAgentTargetHeader(nodeName);
      var file = $scope.formValues.UploadFile;
      ImageService.uploadImage(file)
        .then(function success(msg) {
          if(typeof msg.data.error !== 'undefined') {
            Notifications.error('Failure', msg.data.errorDetail, 'test');
          }else {
            Notifications.success('Images successfully uploaded');
          }
        })
        .catch(function error(err) {
          if(typeof err.message === 'undefined') {
            Notifications.error('Failure',err, 'Please specify the signature or certificate of the image');
          }else {
            Notifications.error('Failure', err.message, 'Unable to upload image');
          }
        })
        .finally(function final() {
          $scope.state.actionInProgress = false;
        });
    };
  },
]);
