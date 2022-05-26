const express = require('express');
const articleSchema = require("../models/article");

const route = express.Router();

//crear 
route.post("/items", (req, res) => {
    const article = articleSchema(req.body);
    article
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//listar
route.get("/items/search=:query", async (req, res) => {
    const list = await articleSchema.find();
    const query = req.params.query.toLocaleLowerCase()
    var result = list.map(opc => {
                let content = opc.author.toLocaleLowerCase()
                if(content.indexOf(query) !== -1){
                    return opc
                }
    })
   
    res.json(result.filter(x => x !== undefined))
    
});
// //endpoint search
// app.get('/api/items/q=:query', (req, res) => {
//     const query = req.params.query
//     var list = notes.map(opc => {
//         let content = opc.content.toLocaleLowerCase()
//         if(content.indexOf(query) !== -1){
//             return opc
//         }
//     })
//     res.send(list.filter(x => x !== undefined))
// })
//details
route.get("/items/:id", (req, res) => {
    const {id} = req.params;
    articleSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});
module.exports = route;