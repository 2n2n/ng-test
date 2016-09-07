app.directive('test', function() {
    return {
        restrict: 'E',
        scope: {
            columns: '=columns'
        },
        templateUrl: 'app/views/datagrid.html'
    };
})