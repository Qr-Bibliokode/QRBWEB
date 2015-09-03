var author = require('./author.routes');
var book = require('./book.routes');
var category = require('./category.routes');
var comment = require('./comment.routes');
var employee = require('./employee.routes');
var holiday = require('./holiday.routes');
var idiom = require('./idiom.routes');
var stock = require('./stock.routes');
var student = require('./student.routes');
var lending = require('./lending.routes');
var userAccount = require('./userAccount.routes');

module.exports = [].concat(author, book, category, comment, employee, holiday, idiom, stock, student, userAccount, lending);