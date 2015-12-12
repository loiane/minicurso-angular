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

        return {
            get: function() {
                return getTasks();
            }
        }
    });