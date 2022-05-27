import { Category } from "../models/Category.js";
import { Product } from "../models/Product.js";
import Sequelize from 'sequelize'

const Op = Sequelize.Op;


export async function getProducts(req, res) {
    try {
        const products = await Product.findAll({
            atributes: ["id", "name", "url_image", "price", "discount", "category"],
        });
        res.json(products);
    } catch (error) {
        res.status().json({
            message: error.message,
        });
    }
}

export async function findByname(req, res) {
    const { name } = req.params;
    try {
        const product = await Product.findAll({
            atributes: ["id", "name", "url_image", "price", "discount", "category"],
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }

        });
        res.json(product);
    } catch (error) {
        res.status().json({
            message: error.message,
        });
    }
}


export async function getProductCategories(req, res) {
    try {
        const { name } = req.params;
        const categories = await Product.findAll({
            include: [{
                model: Category,
                as: 'categoryName',
                where: {
                    name: {
                        [Op.like]: `%${name}%`,
                    },
                },
            },
            ],
            attributes: ['id', 'name', 'url_image', 'price', 'discount'],
            order: [['category', 'ASC']]
        });
        console.log("----------------------------------")
        console.log(categories)
        console.log("----------------------------------")
        res.json({ data: categories });
    } catch (e) {
        console.log("********************************")
        console.log(e)
        console.log("********************************")
    }
}
