// Components
var autor = require('./components/autor.routes');
var categoria = require('./components/categoria.routes');
var comentario = require('./components/comentario.routes');
var contaUsuario = require('./components/contaUsuario.routes');
var funcionario = require('./components/funcionario.routes');
var emprestimo = require('./components/emprestimo.routes');
var estudante = require('./components/estudante.routes');
var feriado = require('./components/feriado.routes');
var idioma = require('./components/idioma.routes');
var livro = require('./components/livro.routes');
var estoque = require('./components/estoque.routes');
var reserva = require('./components/reserva.routes');

// Login
var login = require('../login/login.routes');

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
    estoque,
    reserva,
    login
);