"use strict";

class UserStorage {
    static #users = {
        id: ["user1", "user2", "user3"],
        password: ["1234", "1234", "1234"],
        name: ["name1", "name2", "name3"],
    };  

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;