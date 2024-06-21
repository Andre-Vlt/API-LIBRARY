import { Request, Response } from "express";

import type TipoLivro from "../Tipos/TipoLivro";

let listaLivros: Array<TipoLivro> = [];

export default class LivroController{
    insereLivro(req:Request, res:Response){
        const oLivro =req.body as TipoLivro;
        const novoLivro: TipoLivro = oLivro;
        listaLivros.push(novoLivro);
        return res.status(201).json(novoLivro);
    }

    atualizaLivro( req:Request, res: Response){
        const {isbn} = req.params;
        const {anoPublicacao, autor,titulo} = req.body as TipoLivro;

        const livroAtt = listaLivros.find((livroAtt) => {livroAtt.isbn === isbn})

        if (!livroAtt){
            return res.status(404).json({erro: "Livro não encontrado"});
        }

        livroAtt.anoPublicacao = anoPublicacao;
        livroAtt.autor= autor;
        livroAtt.titulo = titulo;

        return res.status(200).json(livroAtt);
    }

    deletaLivro(req: Request, res: Response){
        const {isbn} = req.params;
        const SelectedBook = listaLivros.find((SelectedBook) => {SelectedBook.isbn === isbn})
        if (!SelectedBook){
            return res.status(404).json({erro: "Livro não encontrado"})
        }
        const indice = listaLivros.indexOf(SelectedBook);
        listaLivros.splice(indice, 1);
        return res.status(200).json({message: "Livro deletado."})
    }

    listarLivros(req: Request, res: Response){
        return res.status(200).json(listaLivros);
    }
}