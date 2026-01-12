// Primitive types
var fullName = "John Doe";
var age = 25;
var isStudent = true;
// Function to create a typed User object
function createUser(id, userName, email, age, address, isActive) {
    return {
        id: id,
        userName: userName,
        email: email,
        age: age,
        address: address,
        isActive: isActive
    };
}
// Creating typed objects
var userAddress = {
    street: "123 Main St",
    city: "Anytown",
    zipCode: 12345
};
var user = createUser(1, "John Doe", "john@example.com", 25, userAddress, true);
console.log("User:", user);
