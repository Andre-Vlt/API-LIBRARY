"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var livrosRouter_1 = __importDefault(require("../Routes/livrosRouter"));
var routes = (0, express_1.Router)();
routes.use('/livros', livrosRouter_1.default);
exports.default = routes;
