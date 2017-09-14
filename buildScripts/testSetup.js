//This file isn't transpiled, so must use Common and ES5

//Register babel to transpile before out tests run
require("babel-register")();

//Disable webpack features that Mocha doesnt understand
require.extensions[".css"] = function(){};