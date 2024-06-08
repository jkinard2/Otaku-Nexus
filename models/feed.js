let posts = [];

// Function to add a new post
function addPost(username, postContent) {
    // Create a new post object
    const newPost = {
        username: username,
        content: postContent,
        timestamp: new Date()// 
    };
    
    // Push the new post to the posts array
    posts.push(newPost);
}

// Function to get all posts
function getAllPosts() {
    // Return all posts
    return posts;
}

// Export functions to be used in other modules
module.exports = {
    addPost,
    getAllPosts
};