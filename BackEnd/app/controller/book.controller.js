const db = require('../config/db.config.js');
const book = db.books;
 
// Post a book
exports.create = (req, res) => {  
  // Save to MySQL database
  book.create({  
    title: req.body.title,
    author: req.body.author,
    translator: req.body.translator,
    publisher: req.body.publisher,
    price: req.body.price,
    page_number: req.body.page_number,
    size: req.body.size,
    description: req.body.description,
    cover: req.body.cover,
    category_id: req.body.category_id,
    day_release: req.body.day_release
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

// fetch book by category_id
exports.findByCategory = (req, res) => {
  book.findAll({
    where: {
      category_id: req.params.categoryId
    }
  }).then(books => {
    res.send(books);
  })
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
  book.update( { 
    title: req.body.title,
    author: req.body.author,
    translator: req.body.translator,
    publisher: req.body.publisher,
    price: req.body.price,
    page_number: req.body.page_number,
    size: req.body.size,
    description: req.body.description,
    cover: req.body.cover,
    category_id: req.body.category_id,
    day_release: req.body.day_release
  }, 
  { where: {id: req.params.bookId} })
  .then(() => {
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