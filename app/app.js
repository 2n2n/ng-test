var app = angular.module('testApp', [])
.controller('mainController', function($scope) {
    $scope.message = 'Hello';
    $scope.doThis = function(data) {
        function clear() {
            $scope.temp = {
                field: '',
                value: ''
            }
        }
        $scope.cols.push(data);
        clear();
    }
    $scope.cols = [
        { field : 'username', value: 'testing 1' },
        { field : 'username', value: 'testing 2' },
        { field : 'username', value: 'testing 3' }
    ]
});