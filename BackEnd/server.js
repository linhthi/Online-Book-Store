var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('{ force: false }');
});
 
require('./app/route/book.route.js')(app);
require('./app/route/category.route.js')(app);
require('./app/route/order.route.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})