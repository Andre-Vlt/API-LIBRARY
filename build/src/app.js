"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var livrosRouter_1 = __importDefault(require("./Routes/livrosRouter"));
var app = (0, express_1.default)();
app.use('/livros', livrosRouter_1.default);
exports.default = app;
