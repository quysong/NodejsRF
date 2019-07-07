'use strict';
module.exports = function (app) {
  let employeeCtrl = require('./controllers/EmployeeController');

  // crud employee
  app.route('/employee')
    .get(employeeCtrl.get)
    .post(employeeCtrl.store);

  app.route('/employee/:id')
    .get(employeeCtrl.detail)
    .put(employeeCtrl.update)
    .delete(employeeCtrl.delete);
};

// module.exports = function (app) {
//   let productsCtrl = require('./controllers/ProductsController');
//   let employeeCtrl = require('./controllers/EmployeeController');

//   // // todoList Routes
//   app.route('/products')
//     .get(productsCtrl.get)
//     .post(productsCtrl.store);

//   app.route('/products/:productId')
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);

//   // crud employee
//   app.route('/employee')
//     .get(employeeCtrl.get)
//     .post(employeeCtrl.store);

//   app.route('/employee/:employeeId')
//     .get(employeeCtrl.detail)
//     .put(employeeCtrl.update)
//     .delete(employeeCtrl.delete);
// };