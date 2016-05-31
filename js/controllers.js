app.controller('mainController', function($scope, $http){
  $scope.view = {};
  $scope.view.movieInput = '';
  $scope.getMovie = function(){
    $http.get('http://www.omdbapi.com/?s=' + $scope.view.movieInput).then(function(res){
      $scope.data = res.data.Search;
    })
  }
})

app.controller('showController', function($scope,$http,$routeParams){
    $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(res){
      $scope.data = res.data;
    })
})