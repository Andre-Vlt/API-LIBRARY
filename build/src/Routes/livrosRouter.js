"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LivrosController_1 = __importDefault(require("../Controller/LivrosController"));
var RouterLivros = express_1.default.Router();
var livrosController = new LivrosController_1.default();
RouterLivros.post("/", livrosController.insereLivro);
RouterLivros.delete("/", livrosController.deletaLivro);
RouterLivros.get("/", livrosController.listarLivros);
RouterLivros.put("/", livrosController.atualizaLivro);
exports.default = RouterLivros;
