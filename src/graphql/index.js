import { GraphQLSchema, GraphQLString, GraphQLObjectType } from 'graphql';
import EmployeeQueries from './employee.query';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    args: {
      name: {
        type: GraphQLString
      }
    },
    fields: () => ({ ...EmployeeQueries })
  })
});

export default schema;
