var author = require('./author.routes');
var book = require('./book.routes');
var category = require('./category.routes');
var idiom = require('./idiom.routes');
var status = require('./status.routes');

module.exports = [].concat(author, book, category, idiom, status);