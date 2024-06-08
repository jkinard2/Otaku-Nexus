let friends = [];

// Function to add a new friend
function addFriend(name) {
    // Create a new friend object
    const newFriend = {
        name: name
    };
    
    // Push the new friend to the friends array
    friends.push(newFriend);
}

// Function to get all friends
function getAllFriends() {
    // Return all friends
    return friends;
}

// Export functions to be used in other modules
module.exports = {
    addFriend,
    getAllFriends
};