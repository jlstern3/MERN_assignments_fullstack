const AuthorController = require("../controllers/authors.controllers");

module.exports = function(app) {
        //create author
        app.post('/api/authors', AuthorController.createAuthor);
        //get all authors
        app.get('/api/authors', AuthorController.getAllAuthors);
        //get single author
        app.get('/api/authors/:id', AuthorController.getSingleAuthor);
        //delete author
        app.delete('/api/authors/:id', AuthorController.deleteAuthor);
        //update author
        app.put('/api/authors/:id', AuthorController.updateAuthor);
}