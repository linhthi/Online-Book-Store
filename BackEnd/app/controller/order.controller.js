const db = require('../config/db.config.js');
const order = db.orders;
 
// Post a order
exports.create = (req, res) => {  
  order.create({  
    client_name: req.body.client_name,
    phone_number: req.body.phone_number,
    product_name: req.body.product_name,
    address: req.body.address,
    amount:req.body.amount,
    status: req.body.status
  }).then(order => {    
    res.send(order);
  });
};
 
// FETCH all orders
exports.findAll = (req, res) => {
  order.findAll({
    attributes: [
      'id',
      'client_name', 
      'phone_number', 
      'product_name',
      'address',
      'amount',
      'status',
      [db.sequelize.fn('date_format', db.sequelize.col('createdAt'), '%Y-%m-%d'), 'order_date']
    ] 
  }).then(orders => {
    res.send(orders);
  });
};
 
// Find a order by Id
exports.findById = (req, res) => {  
  order.findByPk(req.params.orderId,{ 
    attributes: [
      'client_name', 
      'phone_number', 
      'product_name',
      'address',
      'amount',
      'status',
      [db.sequelize.fn('date_format', db.sequelize.col('createdAt'), '%Y-%m-%d'), 'order_date']
    ] 
  }).then(order => {
    res.send(order);
  })
};
 
// delete a order by id
exports.delete = (req, res) => {
  const id = req.params.orderId;
  order.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a order with id = ' + id);
  });
};