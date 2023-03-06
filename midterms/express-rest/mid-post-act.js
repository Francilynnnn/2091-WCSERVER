//Estanislao,Francilyn Bernadette P.

const express = require('express');
const app = express();

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

app.use(express.json());

//add a movie
app.post('/api/movies', (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
  };
  movie.push(movie);
  res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));
