const express = require('express');
const app = express();
app.use(express.json());

let items = [{ id: 1, text: "перший" }];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const { text } = req.body;
  const id = items.length ? items[items.length -1].id + 1 : 1;
  const item = { id, text };
  items.push(item);
  res.status(201).json(item);
});

app.listen(3002, () => console.log('API running on http://localhost:3002'));
