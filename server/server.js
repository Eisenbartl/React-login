const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
});

app.post('/login', (req, res) => {
  const email = req.body.email;

  console.log(req.body);
  res.end();
});

app.post('/register', (req, res) => {
  const email = req.body.email;

  console.log(req.body.regInfo.registerEmail);
  res.end();
});

app.listen(PORT, () => console.log('Server running on port: ', PORT));