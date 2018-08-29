import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import { keys } from 'lodash';
import EmployeeType, { EmployeePositionType } from './employee.type';

import employees from './data/employees';

const EmployeeQueries = {
  employees: {
    type: new GraphQLList(EmployeeType),
    args: {
      name: {
        type: GraphQLString
      },
      position: {
        type: EmployeePositionType
      }
    },
    resolve: (root, args) =>
      employees.filter(employee =>
        keys(args).every(k => args[k] === employee[k])
      )
  },
  reportTree: {
    type: EmployeeType,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: (root, args) => {
      console.log('args', args);
      console.log(employees.find(e => e.id === args.id));
      console.log({ employees });
      return employees.find(e => e.id === args.id);
    }
  }
};

export default EmployeeQueries;
