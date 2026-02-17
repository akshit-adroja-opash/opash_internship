import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import { Product } from "./models/product.js";
import ProductJson from "./product.json" with { type: "json" };

const start = async () => {
  try {
    // Connect to MongoDB
    await connectDB(process.env.MONGO_URI);
    
    // Delete existing products
    await Product.deleteMany();
    console.log("Existing products deleted!");
    
    // Insert new products from JSON file
    await Product.create(ProductJson);
    console.log("Products seeded successfully!");
    
    // Exit the process
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

start();
