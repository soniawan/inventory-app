import express from "express";
import "dotenv/config";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { productRouter } from "./routes/productRouter.js";
import { indexRouter } from "./routes/indexRouter.js";

const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = join(__dirname, "public");
console.log(assetsPath);

// ROUTES
app.use(express.static(assetsPath));
app.use("/", indexRouter);
app.use("/products", productRouter);

// VIEWS
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
});

// RUNNING SERVER
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});
