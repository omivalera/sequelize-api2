import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Product } from "./Product.js";


export const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },

},
)

Category.hasMany(Product, {
    as: "products",
    foreignKey: "category",
  });
  Product.belongsTo(Category, {
    as: "categoryName",
    foreignKey: "category",
  });