webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var say = __webpack_require__(1);

	// this is commonjs async loading function, require([files], callback, chuckName), if the third parameter is missed, the output file name wil be ugly.
	__webpack_require__.e/* nsure */(3, function (require) {
	    var act = __webpack_require__(2);
	    act();
	});

	console.log('home');

	say('home');


/***/ }
]);