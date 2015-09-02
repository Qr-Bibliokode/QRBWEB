var author = require('./author.routes');
var book = require('./book.routes');
var category = require('./category.routes');
var comment = require('./comment.routes');
var employee = require('./employee.routes');
var holiday = require('./holiday.routes');
var idiom = require('./idiom.routes');
var status = require('./status.routes');
var stock = require('./stock.routes');
var student = require('./student.routes');

module.exports = [].concat(author, book, category, comment, employee, holiday, idiom, status, stock, student);