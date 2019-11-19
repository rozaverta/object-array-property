'use strict';

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./cjs/object-array-property.production.min.js');
} else {
	module.exports = require('./cjs/object-array-property.development.js');
}