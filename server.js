const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;
const { Rules } = require('./server/rules');

app.get('/api/customers', async (req, res) => {
  res.send(await Rules.getCustomers());
})

app.get('/api/rules/:customerName', async (req, res) => {
  res.send(await Rules.getRules(req.params.customerName));
});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, ()=> {
  console.log('server running');
});
