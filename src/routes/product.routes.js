import { Router } from "express";
import {
    findByname, getProductCategories, getProducts
} from "../controllers/products.controller.js";

const router = Router();

// Routes
// router.post("/", createProject);
router.get("/", getProducts);
router.get("/:name", findByname);
// router.put("/:id", updateProject);
// router.delete("/:id", deleteProject);
// router.get("/:id", getProduct);

router.get("/category/:name", getProductCategories);

export default router;