angular.module('todoController', [])

    .controller('tasksController', ['$scope', 'TasksService', function($scope, TasksService) {

        $scope.tasks = TasksService.get(); //[{text: 'Teste1'}, {text: 'Teste2'}];

        $scope.formData = {};

        $scope.createTodo = function() {

            if ($scope.formData.text != undefined) {

                var newTask = {
                    id: TasksService.getNextId(),
                    text: $scope.formData.text
                };

                $scope.tasks.push(newTask);

                //console.log($scope.tasks);
                TasksService.save($scope.tasks);

                $scope.formData = {};
            }
        };
    }]);