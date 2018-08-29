import { GraphQLSchema, GraphQLString, GraphQLObjectType } from 'graphql';
import { EmployeeQueries, EmployeeMutations } from './employee.query';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    args: {
      name: {
        type: GraphQLString
      }
    },
    fields: () => ({ ...EmployeeQueries })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    args: {
      id: {
        type: GraphQLString
      }
    },
    fields: () => ({ ...EmployeeMutations })
  })
});

export default schema;
