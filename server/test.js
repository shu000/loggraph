const { Templates } = require('./rules');
(async () => {
  console.log( await Templates.getCustomers() );

  console.log("==add====================")
  console.log( await Templates.addCustomer('sample', [
    {
      "pattern" : "/",
      "matching" : "match",
      "title": "new",
      "text" : "new",
      "backgroundColor" : "#001"
    }
  ]));

  console.log( await Templates.updateTemplate('sample', [
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
  console.log( await Templates.getTemplate('わし') );

  console.log("==remove==================")
  console.log( await Templates.deleteCustomer('sample'));

})();
