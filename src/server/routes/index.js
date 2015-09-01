var author = require('./author.routes');
var book = require('./book.routes');
var category = require('./category.routes');
var comment = require('./comment.routes');
var employee = require('./employee.routes');
var idiom = require('./idiom.routes');
var status = require('./status.routes');

module.exports = [].concat(author, book, category, comment, employee, idiom, status);