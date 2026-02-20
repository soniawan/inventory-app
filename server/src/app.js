import express from "express";
import { productRouter } from "./routes/productRouter.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

// ROUTES
app.use("/products", productRouter);

// ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});
