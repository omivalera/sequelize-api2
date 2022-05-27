import express from "express";
import morgan from "morgan";

const app = express();


import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";

// // Middlewares
app.use(morgan("dev"));
app.use(express.json());

// // Rutas
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);




export default app;

