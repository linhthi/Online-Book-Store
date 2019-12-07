module.exports = function(app) {
 
    const categories = require('../controller/category.controller.js');
 
    // Create a new category
    app.post('/api/categories', categories.create);
 
    // Retrieve all category
    app.get('/api/categories', categories.findAll);
 
    // Retrieve a single category by Id
    // app.get('/api/categories/:categoryId', categories.findById);
 
    // Update a category with Id
    app.put('/api/categories/:categoryId', categories.update);
 
    // Delete a category with Id
    app.delete('/api/categories/:categoryId', categories.delete);
}