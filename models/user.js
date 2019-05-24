const v4 = require('uuid/v4');


async function createUser(username, password){
    const userId = v4();
    try{
        await pool.query(
            `insert into user(userId, username, password) values(?,?,?)`,
            [userId, username, password]
        );
        return true;
    } catch(ex) {
        return false;
    }
}