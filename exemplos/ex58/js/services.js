angular.module('todoService', [])

    .factory('TasksService', function() {

        var key = 'angularTodo';

        function getTasks(){
            var tasks = window.localStorage[key];
            if(tasks) {
                return angular.fromJson(tasks);
            }
            return [];
        }

        function save(tasks){
            window.localStorage[key] = angular.toJson(tasks);
        }

        function getNextId(){
            var taskId = window.localStorage['angularTodoTaskId'];
            if (taskId){
                taskId++;
            } else {
                taskId = 1;
            }
            window.localStorage['angularTodoTaskId'] = taskId;
            return taskId;
        }

        return {
            get: function() {
                return getTasks();
            },
            save: function(tasks) {
                return save(tasks);
            },
            getNextId: function(){
                return getNextId();
            }
        }
    });