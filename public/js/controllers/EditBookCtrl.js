module.exports = function(ngModule){
	ngModule.controller("EditBookCtrl", function($scope, $routeParams, BookService, $firebaseObject, $location){
		var bookId = $routeParams.bookId;

		$scope.formData = {};

		var ref = $firebaseObject(BookService);

		ref.$loaded()
		  .then(function(res) {
		    $scope.formData = res[bookId];
		  })
		  .catch(function(err) {
		    console.error(err);
		  });

		$scope.updateBook = function(){
			ref.$save($scope.formData);
			$location.path("/books");
		};

		// BookService.getSingleBooks($routeParams.bookId)
		// 	.success(function(res){
		// 		vm.book = res;
		// 	});		
	});
};