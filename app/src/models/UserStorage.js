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

    static getUserInfo (id) {

        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);

        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;

        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;