function FormCtrl($scope) {
	$scope.lists = [
		{text: 'World Peace', done:false},
		{text: 'End World Hunger', done:false}
	];
	
	$scope.getTotalList = function() {
		return $scope.lists.length;
	}
	
	$scope.clearCompleted = function() {
		$scope.lists = _.filter($scope.lists, function(list) {
			return !list.done;	
		});
	};
	
	$scope.addList = function() {
		$scope.lists.push({text:$scope.formListText, done:false});
		$scope.formListText = '';
	};	
	
}