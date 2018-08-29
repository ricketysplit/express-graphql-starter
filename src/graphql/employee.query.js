import { GraphQLList, GraphQLString } from 'graphql';
import EmployeeType from './employee.type';

const EmployeeQueries = {
  employees: {
    type: new GraphQLList(EmployeeType),
    args: {
      name: {
        type: GraphQLString
      }
    },
    resolve() {
      return [{ name: 'Ricky Harkins', position: 'Software Developer' }];
    }
  }
};

export default EmployeeQueries;
