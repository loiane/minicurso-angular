angular.module('todoController', [])

    .controller('tasksController', ['$scope', function($scope) {

        $scope.tasks = [{text: 'Teste1'}, {text: 'Teste2'}];
    }]);