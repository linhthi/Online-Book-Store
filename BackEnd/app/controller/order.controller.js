const db = require('../config/db.config.js');
const order = db.orders;
 
// Post a order
exports.create = (req, res) => {  
  // Save to MySQL database
  order.create({  
    client_name: req.body.client_name,
    phone_number: req.body.phone_number,
    product_name: req.body.product_name,
    address: req.body.address,
    amount:req.body.amount,
    // oder_date: req.body.order_date,
    // delivery_date: req.body.delivery_date,
    status: req.body.status
  }).then(order => {    
    // Send created order to client
    res.send(order);
  });
};
 
// FETCH all orders
exports.findAll = (req, res) => {
  order.findAll().then(orders => {
    // Send all orders to Client
    res.send(orders);
  });
};
 
// Find a order by Id
exports.findById = (req, res) => {  
  order.findByPk(req.params.orderId).then(order => {
    res.send(order);
  })
};
 
// Update a 
// exports.update = (req, res) => {
//   const id = req.params.bookId;
//   book.update( { title: req.body.title, author: req.body.author, price: req.body.price, book_code: req.body.book_code }, 
//            { where: {id: req.params.bookId} }
//            ).then(() => {
//            res.status(200).send("updated successfully a book with id = " + id);
//            });
// };
 
// Delete a order by Id
exports.delete = (req, res) => {
  const id = req.params.orderId;
  order.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a order with id = ' + id);
  });
};