var say = require('./common');

// this is commonjs async loading function, require([files], callback, chuckName), if the third parameter is missed, the output file name wil be ugly.
require.ensure(['./special'], function (require) {
    var act = require('./special');
    act();
}, 'special');

console.log('home');

say('home');
