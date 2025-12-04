const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.js

const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ response: 'Hello From DSCE' }));
app.get('/will', (req, res) => res.json({ response: 'Hello World' }));
app.get('/ready', (req, res) => res.json({ response: 'Great!, It works!' }));

module.exports = app;

