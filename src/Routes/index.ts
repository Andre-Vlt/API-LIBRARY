
import express from "express";
import livrosRouter from "../Routes/livrosRouter";

const router = (app: express.Router) => {
    app.use("/livros", livrosRouter);
}

export default router;
