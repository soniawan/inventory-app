import { Router } from "express";
const productRouter = Router();
import { getAllProducts } from "../controllers/productController.js";

productRouter.get("/", getAllProducts);

export { productRouter };
