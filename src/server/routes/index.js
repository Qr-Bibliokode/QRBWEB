var autor = require('./autor.routes');
var categoria = require('./categoria.routes');
var comentario = require('./comentario.routes');
var contaUsuario = require('./contaUsuario.routes');
var funcionario = require('./funcionario.routes');
var emprestimo = require('./emprestimo.routes');
var estudante = require('./estudante.routes');
var feriado = require('./feriado.routes');
var idioma = require('./idioma.routes');
var livro = require('./livro.routes');
var stock = require('./stock.routes');

module.exports = [].concat(
    autor,
    categoria,
    comentario,
    contaUsuario,
    funcionario,
    emprestimo,
    estudante,
    feriado,
    idioma,
    livro,
    stock
);