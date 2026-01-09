// Enum for user status
enum UserStatus {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending"
}

// Union type for API response
type ApiResponse = { success: true; data: any } | { success: false; error: string };

// Typed function to get user status
function getUserStatus(status: UserStatus): string {
    return `User status is ${status}`;
}

// Utility function to calculate area of a rectangle
function calculateRectangleArea(width: number, height: number): number {
    return width * height;
}

// Utility function to greet user
function greetUser(name: string, status: UserStatus): string {
    return `Hello ${name}, your status is ${status}`;
}

// Utility function to handle API response
function handleApiResponse(response: ApiResponse): void {
    if (response.success) {
        console.log("Success:", response.data);
    } else {
        console.log("Error:", response.error);
    }
}

// Usage examples
const userStatus = UserStatus.Active;
console.log(getUserStatus(userStatus));

const area = calculateRectangleArea(10, 5);
console.log(`Rectangle area: ${area}`);

const greeting = greetUser("Alice", UserStatus.Active);
console.log(greeting);

const successResponse: ApiResponse = { success: true, data: { id: 1, name: "Alice" } };
const errorResponse: ApiResponse = { success: false, error: "Not found" };

handleApiResponse(successResponse);
handleApiResponse(errorResponse);
