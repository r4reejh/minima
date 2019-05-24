const {getUserDetails} = require('../models/user');

async function login(username, password) {
    let userDetails = await getUserByUsername(username);
}