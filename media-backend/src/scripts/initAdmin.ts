import { createUser, findUserByUsername } from "../models/user.model.js";

const initAdmin = async () => {
  try {
    
    const adminExists = findUserByUsername("admin");
    
    if (adminExists) {
      console.log("Admin user already exists");
      return;
    }

    
    const admin = await createUser(
      "admin",
      "admin@example.com",
      "admin123",
      "admin"
    );

    console.log("Admin user created successfully:", admin);
  } catch (error) {
    console.error("Error creating admin:", error);
  }
};

// Run if called directly
initAdmin();
