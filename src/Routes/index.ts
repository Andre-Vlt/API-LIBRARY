import {Router} from "express";
import RouterLivros from "../Routes/livrosRouter";

const routes = Router();

routes.use('/livros', RouterLivros);

export default routes;
