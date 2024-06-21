import express from "express";
import RouterLivros from "./Routes/livrosRouter";

const app = express();

app.use('/livros', RouterLivros);

export default app;