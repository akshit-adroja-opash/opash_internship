// Primitive types
let fullName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;

// Type alias
type Address = {
    street: string;
    city: string;
    zipCode: number;
};

// Interface for User
interface User {
    id: number;
    userName: string;
    email: string;
    age: number;
    address: Address;
    isActive: boolean;
}

// Function to create a typed User object
function createUser(id: number, userName: string, email: string, age: number, address: Address, isActive: boolean): User {
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
const userAddress: Address = {
    street: "123 Main St",
    city: "Anytown",
    zipCode: 12345
};

const user: User = createUser(1, "John Doe", "john@example.com", 25, userAddress, true);

console.log("User:", user);
