//1. Installing Express
//2. Installing librarie4s/dependencies
//3. Require statements

const express = require('express');
const app = express();

//4. Use the middleware required for serving stat;
app.use(express.static('public'));

//5.Create the route to serve a static index.html
app.get('/', (req, res) => {
  res.sendFile(_dirname + '/' + 'index.html');
});

//Setting the listener to ENV PORT info
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/*', (req, res) => {
  res.sendFile(_dirname + '/' + 'error.html');
});
