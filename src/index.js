import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/index';

const PORT = 3030;

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use('/', (req, res) => res.status(200).send('Hello World!'));

app.listen(PORT, () => {
  console.log(`App is now listening on port ${PORT}`);
});
