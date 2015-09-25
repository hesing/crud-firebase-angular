require("../css/bootstrap.css");
require("../scss/app.scss");
var angular = require("angular");
var firebase = require("firebase");
require("../vendor/ui-bootstrap-custom-tpls-0.13.4.min");
require("angularfire");
require("angular-route");


var app = angular.module("myApp", ['ngRoute', 'firebase', 'ui.bootstrap']);

require("./appConfig")(app);
require("./controllers/AppCtrl")(app);
require("./controllers/BookCtrl")(app);
require("./controllers/SingleBookCtrl")(app);
require("./controllers/EditBookCtrl")(app);
require("./services/BookService")(app);
//require("./directives/user-list")(app);