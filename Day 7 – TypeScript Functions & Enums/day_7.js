// Enum for user status
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "active";
    UserStatus["Inactive"] = "inactive";
    UserStatus["Pending"] = "pending";
})(UserStatus || (UserStatus = {}));
// Typed function to get user status
function getUserStatus(status) {
    return "User status is ".concat(status);
}
// Utility function to calculate area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}
// Utility function to greet user
function greetUser(name, status) {
    return "Hello ".concat(name, ", your status is ").concat(status);
}
// Utility function to handle API response
function handleApiResponse(response) {
    if (response.success) {
        console.log("Success:", response.data);
    }
    else {
        console.log("Error:", response.error);
    }
}
// Usage examples
var userStatus = UserStatus.Active;
console.log(getUserStatus(userStatus));
var area = calculateRectangleArea(10, 5);
console.log("Rectangle area: ".concat(area));
var greeting = greetUser("Alice", UserStatus.Active);
console.log(greeting);
var successResponse = { success: true, data: { id: 1, name: "Alice" } };
var errorResponse = { success: false, error: "Not found" };
handleApiResponse(successResponse);
handleApiResponse(errorResponse);
