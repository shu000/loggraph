const { Rules } = require('./rules');
(async () => {
  console.log( await Rules.getCustomers() );

  console.log("==add====================")
  console.log( await Rules.addCustomer('sample', [
    {
      "pattern" : "/",
      "matching" : "match",
      "title": "new",
      "text" : "new",
      "backgroundColor" : "#001"
    }
  ]));

  console.log( await Rules.updateRules('sample', [
    {
      "pattern" : "/",
      "matching" : "startsWith",
      "title": "new",
      "text" : "new",
      "backgroundColor" : "#001"
    },
    {
      "pattern" : "/",
      "matching" : "startsWith",
      "title": "second",
      "text" : "second",
      "backgroundColor" : "#010"
    }
  ]));

  console.log("==get=====================")
  console.log( await Rules.getRules('sample') );

  console.log("==remove==================")
  console.log( await Rules.deleteCustomer('sample'));

})();
