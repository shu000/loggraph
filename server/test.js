const { Rules } = require('./rules');
(async () => {
  const result = JSON.parse(await Rules.getCustomers());
  const customers = result.result;
  console.log(customers);

  console.log(await Rules.getRules(customers[1]));

  // console.log("==remove==================")
  // console.log( await Rules.deleteCustomer('sample'));

})();
