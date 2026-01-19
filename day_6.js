"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Primitive types
let fullName = "John Doe";
let age = 25;
let isStudent = true;
// Function to create a typed User object
function createUser(id, userName, email, age, address, isActive) {
    return {
        id,
        userName,
        email,
        age,
        address,
        isActive
    };
}
// Creating typed objects
const userAddress = {
    street: "123 Main St",
    city: "Anytown",
    zipCode: 12345
};
const user = createUser(1, "John Doe", "john@example.com", 25, userAddress, true);
console.log("User:", user);
//# sourceMappingURL=day_6.js.map