const express = require('express');
const cors = require('cors');
require('dotenv').config();
const TransactionModel = require('./model/Transaction.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.json('Hello, World!');
});

app.post('/api/transaction', async (req, res) => {
 await mongoose.connect('process.env.MONGO_URL')
 const {item, description, datetime} = req.body;
 const transaction = await Transaction.create({item, description, datetime})
 res.json(transaction);
})

const port = 4040;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
