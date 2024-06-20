"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var livrosRouter_1 = __importDefault(require("../Routes/livrosRouter"));
var router = function (app) {
    app.use("/livros", livrosRouter_1.default);
};
exports.default = router;
