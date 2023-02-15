const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.json('Hello, World!');
});

app.post('/api/transaction', (req, res) => {
  res.json(req.body);
})

const port = 4040;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
