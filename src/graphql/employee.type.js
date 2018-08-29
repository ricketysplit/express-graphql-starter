import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
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
    SENIOR_SOFTWARE_DEVELOPER: { value: 'Senior Software Developer' },
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
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    position: {
      type: EmployeePositionType
    },
    reportsTo: {
      type: EmployeeType,
      resolve: root => employees.getOneById(root.reportsTo)
    },
    supervises: {
      type: new GraphQLList(EmployeeType),
      resolve: root => employees.getAll().filter(e => e.reportsTo === root.id)
    }
  })
});

export const EmployeeInputType = new GraphQLInputObjectType({
  name: 'EmployeeInputType',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    position: { type: EmployeePositionType },
    reportsTo: {
      type: GraphQLInt
    },
    supervises: {
      type: GraphQLList(GraphQLInt)
    }
  })
});

export default EmployeeType;
