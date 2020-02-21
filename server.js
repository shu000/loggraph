const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.APP_PORT;
const { Rules } = require('./server/rules');


app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/api/customers', async (req, res) => {
  res.send(await Rules.getCustomers());
})

app.post('/api/customers', async (req, res) => {
  res.send(await Rules.addCustomer(req.body.customerName));
});

app.delete('/api/customers/:customerName', async (req, res) => {
  res.send(await Rules.deleteCustomer(req.params.customerName));
});

app.put('/api/customers/:customerName', async (req, res) => {
  res.send(await Rules.updateCustomer(req.params.customerName, req.body.newCustomerName));
});

app.get('/api/rules/:customerName', async (req, res) => {
  res.send(await Rules.getRules(req.params.customerName));
});

app.post('/api/rules/:customerName', async (req, res) => {
  res.send(await Rules.updateRules(req.body.rules));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, ()=> {
  console.log('server running');
});
