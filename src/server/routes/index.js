var autor = require('./autor.routes');
var categoria = require('./categoria.routes');
var comentario = require('./comentario.routes');
var contaUsuario = require('./contaUsuario.routes');
var empregado = require('./empregado.routes');
var emprestimo = require('./emprestimo.routes');
var estudante = require('./estudante.routes');
var feriado = require('./feriado.routes');
var idiomaa = require('./idioma.routes');
var livro = require('./livro.routes');
var stock = require('./stock.routes');

module.exports = [].concat(
    autor,
    categoria,
    comentario,
    contaUsuario,
    empregado,
    emprestimo,
    estudante,
    feriado,
    idiomaa,
    livro,
    stock
);