
import express  from "express";
import LivrosController from "../Controller/LivrosController";

const router = express.Router();

const livrosController = new LivrosController();
router.post("/", livrosController.insereLivro);

router.delete("/", livrosController.deletaLivro);

router.get("/", livrosController.listarLivros);

router.put("/", livrosController.atualizaLivro);

export default router;