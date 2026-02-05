function fakeFetchUser(userId: number) {
    return Promise.reject(new Error("HTTP error | 500 Not Found"));
}

function fakeFetchData(userId: number) {
    return Promise.reject(new Error("HTTP error | 404 Not Found"));
}

async function fakeFetchOther(userId: number) {
    try {
        return await fakeFetchUser(userId);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching user:", error.message);
        }
        throw error; // Re-throw the error after logging it
    }
}

function fetchUserPosts(userId: number) {
    return fakeFetchData(userId)
        .then(() => [])
        .catch((error) => {
            if (error instanceof Error) {
                console.error("Error fetching user posts:", error.message);
            }
            return []; // Return an empty array if there's an error
        });
}

fakeFetchOther(1).catch(() => {
    fetchUserPosts(1).then((posts) => {
        console.log("User posts:", posts.length);
    });
});
