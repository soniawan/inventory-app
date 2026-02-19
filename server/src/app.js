import express from "express";
import { productRouter } from "./routes/productRouter.js";
const app = express();
const PORT = 8000;

app.use("/products", productRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});
