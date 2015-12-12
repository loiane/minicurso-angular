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

        var editTask = function(taskName, task){
            for(var i=0; i<$scope.tasks.length; i++){
                if ($scope.tasks[i].id === task.id){
                    $scope.tasks[i].text = taskName;
                    break;
                }
            }
            TasksService.save($scope.tasks);
        };

        $scope.editTodo = function(task) {

            var taskName = prompt("Atualize a tarefa:", task.text);
            if (taskName !== null) {
                editTask(taskName, task);
            }
        };


    }]);