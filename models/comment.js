let comments = [];

// Function to add a new comment
function addComment(username, commentText) {
    // Create a new comment object
    const newComment = {
        username: username,
        comment: commentText,
        timestamp: new Date() // You can add a timestamp if needed
    };
    
    // Push the new comment to the comments array
    comments.push(newComment);
}

// Function to get all comments
function getAllComments() {
    // Return all comments
    return comments;
}

// Export functions to be used in other modules
module.exports = {
    addComment,
    getAllComments
};