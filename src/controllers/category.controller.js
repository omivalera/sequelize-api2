import { Category } from "../models/Category.js";



export async function getCategories(req, res) {
    try {
        const categories = await Category.findAll({
            attributes: ["id", "name"],
            order: [["id", "DESC"]],
        });
        res.json(categories);
    } catch (error) {
        res.status().json({ message: error.message });
    }
}


export async function getCategory(req, res) {
    const { name } = req.params;
    try {
        const category = await Category.findOne({
            where: { name },
            attributes: ["name"],
        });
        res.json(category);
    } catch (error) {
        res.status().json({ message: error.message });
    }
} 