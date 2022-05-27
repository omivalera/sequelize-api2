import { Router } from "express";
import {
    // createCategory,
    getCategories,
    // updateCategory,
    // deleteCategory,
    getCategory,
} from "../controllers/category.controller.js";

const router = Router();

// Routes
// router.post("/", createTask);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);
router.get("/", getCategories);
router.get("/:id", getCategory);

export default router;