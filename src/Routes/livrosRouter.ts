import express  from "express";
import LivrosController from "../Controller/LivrosController";

const RouterLivros = express.Router();

const livrosController = new LivrosController();
RouterLivros.post("/", livrosController.insereLivro);

RouterLivros.delete("/", livrosController.deletaLivro);

RouterLivros.get("/", livrosController.listarLivros);

RouterLivros.put("/", livrosController.atualizaLivro);

export default RouterLivros;