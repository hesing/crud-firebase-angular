module.exports = function(ngModule) {
    ngModule.constant("BASE_URL", "https://hkapp.firebaseio.com/");
    ngModule.factory("BookService", function($firebase, BASE_URL) {
        return new Firebase(BASE_URL + "books");
    });
};
