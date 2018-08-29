import {
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import employees from './data/employees';

export const EmployeePositionType = new GraphQLEnumType({
  name: 'EmployeePositions',
  values: {
    CEO: { value: 'CEO' },
    SOFTWARE_DEVELOPER: { value: 'Software Developer' },
    MARKETING_DIRECTOR: { value: 'Marketing Director' },
    MARKETING_INTERN: { value: 'Marketing Intern' },
    IT_DIRECTOR: { value: 'IT Director' }
  }
});

const EmployeeType = new GraphQLObjectType({
  name: 'EmployeeType',
  description: 'Employee Type',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    position: {
      type: EmployeePositionType
    },
    reportsTo: {
      type: EmployeeType,
      resolve: root => employees.find(e => e.id === root.reportsTo)
    },
    supervises: {
      type: new GraphQLList(EmployeeType),
      args: {
        gender: {
          type: GraphQLString
        }
      },
      resolve: (root, args) =>
        employees.filter(
          e => e.reportsTo === root.id && e.gender === args.gender
        )
    }
  })
});

export default EmployeeType;
