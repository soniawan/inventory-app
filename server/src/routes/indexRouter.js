import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
const indexRouter = Router();

// READ INDEX
indexRouter.get("/", getIndex);

export { indexRouter };
