(->
  app = angular.module('myApp', [])
  usr = '//api.github.com/users/angeal185'
  url1 = '//api.github.com/users/angeal185/repos?page=1'
  url2 = '//api.github.com/users/angeal185/repos?page=2'
  url3 = '//api.github.com/users/angeal185/repos?page=3'
  app.controller 'myCtrl', ($scope, $http) ->
    $http.get(usr).then (response) ->
      $scope.content = response.data
      $scope.statuscode = response.status
      $scope.statustext = response.statusText
      return
    $http.get(url1).then (response) ->
      $scope.content1 = response.data
      return
    $http.get(url2).then (response) ->
      $scope.content2 = response.data
      return
    $http.get(url3).then (response) ->
      $scope.content3 = response.data
      return
    return
  return
).call this