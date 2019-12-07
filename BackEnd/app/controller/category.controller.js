const db = require('../config/db.config.js');
const category = db.categories;
 
// Post a category
exports.create = (req, res) => {  
  // Save to MySQL database
  category.create({  
    category_name: req.body.category_name,
  }).then(category => {    
    // Send created book to client
    res.send(category);
  });
};
 
// FETCH all categories
exports.findAll = (req, res) => {
  category.findAll().then(categories => {
    // Send all categories to Client
    res.send(categories);
  });
};
 
// Find a category by Id
// exports.findById = (req, res) => {  
//   book.findByPk(req.params.bookId).then(book => {
//     res.send(book);
//   })
// };
 
// Update a category
exports.update = (req, res) => {
  const id = req.params.categoryId;
  category.update( { category_name: req.body.category_name}, 
           { where: {id: req.params.categoryId} }
           ).then(() => {
           res.status(200).send("updated successfully a category with id = " + id);
           });
};
 
// Delete a category by Id
exports.delete = (req, res) => {
  const id = req.params.categoryId;
  category.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a category with id = ' + id);
  });
};