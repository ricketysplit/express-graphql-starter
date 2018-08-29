let employees = [
  {
    id: 123,
    name: 'Ricky Harkins',
    gender: 'M',
    position: 'IT Director',
    reportsTo: 1
  },
  {
    id: 234,
    name: 'Frank Robinson',
    gender: 'M',
    position: 'Marketing Director',
    reportsTo: 1
  },
  {
    id: 345,
    name: 'James Brown',
    gender: 'M',
    position: 'Software Developer',
    reportsTo: 123
  },
  {
    id: 456,
    name: 'Lauren Reese',
    gender: 'F',
    position: 'Marketing Intern',
    reportsTo: 234
  },
  {
    id: 749,
    name: 'Jessica Robles',
    position: 'Senior Software Developer',
    reportsTo: 123
  },
  {
    id: 1,
    name: 'George Washington',
    gender: 'M',
    position: 'CEO'
  }
];

const add = employee => employees.push(employee);

const getOneById = id => employees.find(e => e.id === id);

const getAll = () => employees;

const removeById = id => {
  employees = employees.filter(e => e.id !== id);
};

const updateById = (id, updates) => {
  employees = employees.map(e => (e.id === id ? Object.assign(e, updates) : e));
};

export default {
  add,
  getOneById,
  getAll,
  removeById,
  updateById
};
