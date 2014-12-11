angular.module('testModule', [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.report = { 
            resource: '/temp/AirTemp', 
            params: { Farm:["10D1CF"] } 
        };
}]);