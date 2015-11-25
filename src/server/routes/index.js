// Components
var autor = require('./components/autor.routes');
var categoria = require('./components/categoria.routes');
var comentario = require('./components/comentario.routes');
var contaUsuario = require('./components/contaUsuario.routes');
var emprestimo = require('./components/emprestimo.routes');
var estoque = require('./components/estoque.routes');
var estudante = require('./components/estudante.routes');
var feriado = require('./components/feriado.routes');
var funcionario = require('./components/funcionario.routes');
var idioma = require('./components/idioma.routes');
var livro = require('./components/livro.routes');
var reserva = require('./components/reserva.routes');

// Login
var login = require('../login/login.routes');

module.exports = [].concat(
    autor,
    categoria,
    comentario,
    contaUsuario,
    emprestimo,
    estudante,
    estoque,
    feriado,
    funcionario,
    idioma,
    livro,
    reserva,
    login
);