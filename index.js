

const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getexample', (req, res) => {
    res.send({ express: 'This is a get example from express' });
  });

app.post('/api/postexample', (req, res) => {
    console.log(req.body);
    res.send(
      `Post request has been received with this parameters: ${req.body.post}`,
    );
  });

if (process.env.NODE_ENV === 'production') {
  // Response static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // route and redirect requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));