
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listaLivros = [];
var LivroController = /** @class */ (function () {
    function LivroController() {
    }
    LivroController.prototype.insereLivro = function (req, res) {
        var _a = req.body, titulo = _a.titulo, anoPublicacao = _a.anoPublicacao, autor = _a.autor, isbn = _a.isbn;
        var novoLivro = { titulo: titulo, anoPublicacao: anoPublicacao, autor: autor, isbn: isbn };
        listaLivros.push(novoLivro);
        return res.status(201).json(novoLivro);
    };
    LivroController.prototype.atualizaLivro = function (req, res) {
        var isbn = req.params.isbn;
        var _a = req.body, anoPublicacao = _a.anoPublicacao, autor = _a.autor, titulo = _a.titulo;
        var livroAtt = listaLivros.find(function (livroAtt) { livroAtt.isbn === isbn; });
        if (!livroAtt) {
            return res.status(404).json({ erro: "Livro não encontrado" });
        }
        livroAtt.anoPublicacao = anoPublicacao;
        livroAtt.autor = autor;
        livroAtt.titulo = titulo;
        return res.status(200).json(livroAtt);
    };
    LivroController.prototype.deletaLivro = function (req, res) {
        var isbn = req.params.isbn;
        var SelectedBook = listaLivros.find(function (SelectedBook) { SelectedBook.isbn === isbn; });
        if (!SelectedBook) {
            return res.status(404).json({ erro: "Livro não encontrado" });
        }
        var indice = listaLivros.indexOf(SelectedBook);
        listaLivros.splice(indice, 1);
        return res.status(200).json({ message: "Livro deletado." });
    };
    LivroController.prototype.listarLivros = function (req, res) {
        return res.status(200).json(listaLivros);
    };
    return LivroController;
}());
exports.default = LivroController;
