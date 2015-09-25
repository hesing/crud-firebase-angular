module.exports = function(ngModule){
	ngModule.config(function($routeProvider){
			$routeProvider
			.when("/home", {
				//controller: "HomeCtrl",
				//controllerAs: "home",
				template: require("../views/home.html")
			})
			.when("/books", {
				controller: "BookCtrl as book",
				template: require("../views/books.html")
			})
			.when("/books/:bookId", {
				controller: "SingleBookCtrl",
				controllerAs: "sb",
				template: require("../views/book.html")
			})
			.when("/books/:bookId/edit", {
				controller: "EditBookCtrl",
				template: require("../views/edit-book.html")
			})
			.when("/about", {
				template: require("../views/about.html")
			})
			.otherwise("/home");
		});
};