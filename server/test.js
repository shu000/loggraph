const { Rules } = require('./rules');
(async () => {
  /*
  const result = JSON.parse(await Rules.getCustomers());
  const customers = result.result;
  console.log(customers);

  console.log(await Rules.getRules(customers[1]));
  */

  Rules.deleteCustomer('sample');
  Rules.deleteCustomer('Mor');
  Rules.deleteCustomer('');
  Rules.addCustomer('Mor');
  Rules.updateRules('Mor', [
    {
      pattern: "/",
      matching: "match",
      title: "Root",
      text: "R",
      backgroundColor: "#c0c0c0"
    },
    {
      pattern: "/concept",
      matching: "startsWith",
      title: "Company",
      text: "C",
      backgroundColor: "#00cc99"
    },
    {
      pattern: "/works",
      matching: "startsWith",
      title: "Works",
      text: "W",
      backgroundColor: "#cc77cc"
    }
  ]);

  Rules.addCustomer('Zo');
  Rules.updateRules('Zo', [
    {
      pattern: "/",
      matching: "match",
      title: "Root",
      text: "R",
      backgroundColor: "#808080"
    },
    {
      pattern: "/wood",
      matching: "startsWith",
      title: "Wood",
      text: "WD",
      backgroundColor: "#009900"
    },
    {
      pattern: "/contact",
      matching: "startsWith",
      title: "Contact",
      text: "CT",
      backgroundColor: "#ff8856"
    }
  ]);



  // console.log("==remove==================")
  // console.log( await Rules.deleteCustomer('sample'));

})();
