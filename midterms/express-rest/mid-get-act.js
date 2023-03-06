//Estanislao,Francilyn Bernadette P.

const express = require('express');
const app = express();

//Array for GET Method
const movies = [
  {
    id: 1,
    title: 'Superman',
  },
  {
    id: 2,
    title: 'Thor',
  },
  {
    id: 3,
    title: 'Iron Man',
  },
];

//get all movies
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

//get movie by title
app.get('/api/movies/:searchParam', (req, res) => {
  const searchParam = req.params.searchParam;
  const movie = movies.find(
    (n) =>
      n.id === parseInt(searchParam) ||
      n.title.toLowerCase().includes(searchParam.toLowerCase())
  );
  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');
  res.send(movie);
});

//get movie by id
app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find((h) => h.id === parseInt(req.params.id));
  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');
  res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));
