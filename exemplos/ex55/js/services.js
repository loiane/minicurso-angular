angular.module('todoService', [])

    .factory('TasksService', function() {

        function getTasks(){
            return [{text: 'Teste1'}, {text: 'Teste2'}];
        }

        return {
            get: function() {
                return getTasks();
            }
        }
    });