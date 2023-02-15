const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Hello, World!');
});

app.post('/', (res, req) => {
  
})

const port = 4040;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
