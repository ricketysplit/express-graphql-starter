import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';
import { keys } from 'lodash';
import EmployeeType, {
  EmployeeInputType,
  EmployeePositionType
} from './employee.type';

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
      employees
        .getAll()
        .filter(employee => keys(args).every(k => args[k] === employee[k]))
  },
  reportTree: {
    type: EmployeeType,
    args: {
      id: {
        type: GraphQLString
      }
    },
    resolve: (root, args) => employees.getOneById(args.id)
  }
};

const EmployeeMutations = {
  addEmployee: {
    type: EmployeeType,
    args: {
      input: {
        type: new GraphQLNonNull(EmployeeInputType)
      }
    },
    resolve: (root, { input }) => {
      const { id, name, position, reportsTo, supervises } = input;
      employees.add({ id, name, position, reportsTo });
      if (supervises)
        supervises.map(s => employees.updateById(s, { reportsTo: id }));
      return input;
    }
  },
  removeEmployee: {
    type: new GraphQLObjectType({
      name: 'MutationReturnType',
      fields: () => ({
        employees: {
          type: new GraphQLList(EmployeeType)
        }
      })
    }),
    description: 'Remove an employee from the system',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: (value, { id }) => {
      employees.removeById(id);
      return { employees: employees.getAll() };
    }
  }
};

export { EmployeeQueries, EmployeeMutations };
