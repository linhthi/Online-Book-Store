module.exports = function(app) {
 
    const books = require('../controller/book.controller.js');
 
    // Create a new Book
    app.post('/api/books', books.create);
 
    // Retrieve all Book
    app.get('/api/books', books.findAll);

    // Retrieve books by category_id
    app.get('/api/books/category/:categoryId', books.findByCategory);
 
    // Retrieve a single Book by Id
    app.get('/api/books/:bookId', books.findById);
 
    // Update a book with Id
    app.put('/api/books/:bookId', books.update);
 
    // Delete a book with Id
    app.delete('/api/books/:bookId', books.delete);
}