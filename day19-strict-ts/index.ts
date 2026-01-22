// index.ts (STRICT TYPESCRIPT)

// Interface (data shape)
interface User {
  name: string;
  email: string;
  age: number;
}

// Function with strict typing
function registerUser(user: User): string {
  if (user.age < 18) {
    throw new Error("User must be 18+");
  }

  return `User ${user.name} registered successfully`;
}

// Safe execution
try {
  const newUser: User = {
    name: "Akshit",
    email: "akshit@gmail.com",
    age: 18
  };

  const result = registerUser(newUser);
  console.log(result);

} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
}
