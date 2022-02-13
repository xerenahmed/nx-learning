/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});
// return random data
app.get('/api/games', (req, res) => {
  res.send({
    games: [
      {
        id: 1,
        name: 'Game 1',
        description: 'This is game 1',
        image: 'https://via.placeholder.com/150',
        price: '$10',
        rating: 4.5,
        releaseDate: '2019-01-01',
        developer: 'Game 1',
        publisher: 'Game 1',
        tags: ['Action', 'RPG', 'FPS'],
      }
    ]});
});


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
