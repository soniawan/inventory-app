import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = Router();

// CREATE - PRODUCT
productRouter.post("/", createProduct);

// READ - ALL PRODUCTS
productRouter.get("/", getAllProducts);

// READ - PRODUCT BY ID
productRouter.get("/:productId", getProductById);

// UPDATE - UPDATE PRODUCT
productRouter.patch("/:productId", updateProduct);

// DELETE - DELETE PRODUCT
productRouter.delete("/:productId", deleteProduct);

export { productRouter };
