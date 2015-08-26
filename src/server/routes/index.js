var author = require('./author.routes');
var category = require('./category.routes');
var idiom = require('./idiom.routes');

module.exports = [].concat(author, category, idiom);