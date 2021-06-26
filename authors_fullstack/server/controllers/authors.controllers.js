const Author = require('../models/authors.models');

//Create Product
module.exports.createAuthor = (req,res) => {
    console.log("Inside createAuthor");
    console.log(req.body);
    Author.create(req.body)
        .then((newAuthor) =>{
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//Get all products
module.exports.getAllAuthors = (req, res) => {
    console.log("inside getAllAuthors");
    Author.find({})
        .then((allAuthors) => {
            console.log(allAuthors);
            res.json(allAuthors);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//get single product
module.exports.getSingleAuthor = (req, res) => {
    console.log("Inside getSingleAuthor");
    Author.findById(req.params.id)
        .then((singleAuthor) => {
            console.log(singleAuthor);
            res.json(singleAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//delete product
module.exports.deleteAuthor = (req,res) =>{
    console.log("Inside deleteAuthor");
    Author.findByIdAndDelete(req.params.id)
        .then((deletedAuthor) =>{
            console.log(deletedAuthor);
            res.json(deletedAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//update product
module.exports.updateAuthor = (req, res) =>{
    console.log("Inside updateAuthor");
    Author.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then((updatedAuthor) => {
            console.log(updatedAuthor);
            res.json(updatedAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}