const express = require('express');
const articleSchema = require("../models/article");

const route = express.Router();

//listar 
route.get("/items/:id", (req, res) => {
    const {id} = req.params;
    articleSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

module.exports = route;