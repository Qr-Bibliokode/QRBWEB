var author = require('./author.routes');
var category = require('./category.routes');
var idiom = require('./idiom.routes');
var status = require('./status.routes');

module.exports = [].concat(author, category, idiom, status);