"use strict";

const User = require("../../models/Users");

const output = {

    main : (req, res) => {
        res.render("home/index");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },  

    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {

    login : (req, res) => {

        const user = new User(req.body);
        const response = user.login();

        return res.json(response);
    },

    process : (req, res) => {
        
        const user = new User(req.body);
        const response = user.register();

        return res.json(response);

    },
};

module.exports = {
    output,
    process,
};