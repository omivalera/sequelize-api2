import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Category } from "./Category.js";

export const Product = sequelize.define('product',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        
    },
    url_image: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    discount: {
        type: DataTypes.INTEGER,
    },
    category: {
        type: DataTypes.INTEGER,
    },
});

// relacion de tablas 

// Product.hasMany(Category,{
//     primaryKey: 'name'
// })

// Category.belongsTo(Product, {
//     foreingKey: 'category'
// })
