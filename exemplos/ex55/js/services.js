angular.module('todoService', [])

    .factory('TasksService', function() {

        var key = 'angularTodo';

        function getTasks(){
            return [{text: 'Teste1'}, {text: 'Teste2'}];
        }

        return {
            get: function() {
                return getTasks();
            }
        }
    });