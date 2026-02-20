import { NotFoundError } from "../errors/NotFoundError.js";
import * as productModel from "../models/productModel.js";

// CREATE PRODUCT
const createProduct = (req, res) => {
  res.send("POST product");
};

// GET ALL PRODUCTS
const getAllProducts = (req, res) => {
  res.send("All products");
};

// GET PRODUCT BY ID
async function getProductById(req, res) {
  const { productId } = req.params;
  const product = await productModel.getProductById(Number(productId));

  // ERROR dengan custom error
  if (!product) {
    throw new NotFoundError("Product not found");
  }

  res.send(`Nama: ${product.name}, Harga: ${product.price}`);

  // ERROR dengan try catch
  // try {
  //   const product = await productModel.getProductById(Number(productId));

  //   if (!product) {
  //     res.status(404).send("Product not found");
  //     return;
  //   }

  //   res.send(`Nama: ${product.name}, Harga: ${product.price}`);
  // } catch (error) {
  //   res.status(500).send("Internal server error");
  // }
}

// UPDATE PRODUCT
const updateProduct = (req, res) => {
  res.send("Update product");
};

// DETELE PRODUCT
const deleteProduct = (req, res) => {
  res.send("Delete product");
};

export {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
