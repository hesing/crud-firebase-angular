module.exports = function(ngModule) {
    ngModule.controller('AddBookCtrl', function($scope, $modalInstance, books) {
    	$scope.formData = {};

        $scope.addBook = function() {
        	$scope.formData.createdOn = new Date().getTime();
            books.$add($scope.formData)
            	.then(function(ref){
            		console.log("new book id"+ref.key());
            	});
            $modalInstance.close(books);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });


    ngModule.controller("BookCtrl", function($firebaseArray, $modal, BookService) {
        var vm = this;
        vm.books = $firebaseArray(BookService);

        vm.open = function(size) {

            var modalInstance = $modal.open({
                template: require('../../views/add-book-form.html'),
                controller: 'AddBookCtrl',
                size: 'lg',
                resolve: {
                    books: function() {
                        return vm.books;
                    }
                }
            });

            modalInstance.result.then(function (books) {
              console.log(books);
            }, function () {
              console.info('Modal dismissed at: ' + new Date());
            });
        };

        vm.removeBook = function(book){
        	vm.books.$remove(book);
        	console.log(book);
        };

    });
};
