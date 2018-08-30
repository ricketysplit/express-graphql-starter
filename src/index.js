import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './graphql/index';

const PORT = 3030;

const app = express();

app.use(
  '/graphql',
  cors({ credentials: true, origin: true }),
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use('/', (req, res) => res.status(200).send('Hello World!'));

app.listen(PORT, () => {
  console.log(`App is now listening on port ${PORT}`);
});
