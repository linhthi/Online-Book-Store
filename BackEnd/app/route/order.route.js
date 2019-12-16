module.exports = function(app) {
 
    const orders = require('../controller/order.controller.js');
 
    // Create a new order
    app.post('/api/orders', orders.create);
 
    // Retrieve all order
    app.get('/api/orders', orders.findAll);
 
    // Retrieve a single order by Id
    app.get('/api/orders/:orderId', orders.findById);
 
    // Update a order with Id
    // app.put('/api/orders/:orderId', orders.update);
 
    // Delete a order with Id
    app.delete('/api/orders/:orderId', orders.delete);
}