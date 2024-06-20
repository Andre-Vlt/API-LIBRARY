"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LivrosController_1 = __importDefault(require("../Controller/LivrosController"));
var router = express_1.default.Router();
var livrosController = new LivrosController_1.default();
router.post("/", livrosController.insereLivro);
router.delete("/", livrosController.deletaLivro);
router.get("/", livrosController.listarLivros);
router.put("/", livrosController.atualizaLivro);
exports.default = router;
