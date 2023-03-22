//Estanislao, Francilyn Bernadette P.
//WD-201

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/dishes', (req, res) => {
  res.send(['Sisig', 'Salpicao', 'Bagnet']);
});

app.listen(3000, () => console.log('Listening on port 3000'));
