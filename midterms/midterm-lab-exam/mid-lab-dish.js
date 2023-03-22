//Estanislao,Francilyn Bernadette P.
//Midterm Exam (Hands-on)
//WD-201

const express = require('express');
const app = express();

const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 220,
  },
];

app.get('/api/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/api/dishes/:type', (req, res) => {
  const type = req.params.type;
  const dish = dishes.find(
    (n) =>
      n.type.toLowerCase().includes(type.toLowerCase())  ||
      n.province.toLowerCase().includes(type.toLowerCase()) ||
      n.price === parseInt(type)
  );
  if (!dish)
    return res.status(404).send('Record not found.');
  res.send(dish);
});

app.get('/api/dishes/:province', (req, res) => {
  const dish = dishes.find((h) => h.province === parseInt(req.params.province));
  if (!dish) return res.status(404).send('Record not found');
  res.send(dish);
});

app.listen(3000, () => console.log('Listening on port 3000'));
