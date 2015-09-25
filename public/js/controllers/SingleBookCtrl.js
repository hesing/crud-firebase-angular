module.exports = function(ngModule){
	ngModule.controller("SingleBookCtrl", function($routeParams, BookService, $firebaseObject){
		var vm = this,
			bookId = $routeParams.bookId;

		var ref = $firebaseObject(BookService);

		ref.$loaded()
		  .then(function(res) {
		    vm.book = res[bookId];
		  })
		  .catch(function(err) {
		    console.error(err);
		  });


		// BookService.getSingleBooks($routeParams.bookId)
		// 	.success(function(res){
		// 		vm.book = res;
		// 	});		
	});
};