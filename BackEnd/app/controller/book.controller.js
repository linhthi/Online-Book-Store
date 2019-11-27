const db = require('../config/db.config.js');
const book = db.books;
 
// Post a book
exports.create = (req, res) => {  
  // Save to MySQL database
  book.create({  
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    book_code: req.body.book_code
  }).then(book => {    
    // Send created book to client
    res.send(book);
  });
};
 
// FETCH all books
exports.findAll = (req, res) => {
  book.findAll().then(books => {
    // Send all books to Client
    res.send(books);
  });
};
 
// Find a book by Id
exports.findById = (req, res) => {  
  book.findByPk(req.params.bookId).then(book => {
    res.send(book);
  })
};
 
// Update a book
exports.update = (req, res) => {
  const id = req.params.bookId;
  book.update( { title: req.body.title, author: req.body.author, price: req.body.price, book_code: req.body.book_code }, 
           { where: {id: req.params.bookId} }
           ).then(() => {
           res.status(200).send("updated successfully a book with id = " + id);
           });
};
 
// Delete a book by Id
exports.delete = (req, res) => {
  const id = req.params.bookId;
  book.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a book with id = ' + id);
  });
};