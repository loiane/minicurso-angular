angular.module('todoController', [])

    .controller('tasksController', ['$scope', 'TasksService', function($scope, TasksService) {

        $scope.tasks = TasksService.get(); //[{text: 'Teste1'}, {text: 'Teste2'}];
    }]);