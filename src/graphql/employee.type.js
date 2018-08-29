import { GraphQLObjectType, GraphQLString } from 'graphql';

const EmployeeType = new GraphQLObjectType({
  name: 'EmployeeType',
  description: 'Employee Type',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    position: {
      type: GraphQLString
    }
  })
});

export default EmployeeType;
