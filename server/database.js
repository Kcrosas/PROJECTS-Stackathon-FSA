const Sequelize = require("sequelize");
const { STRING, INTEGER, DATEONLY } = Sequelize;
const { employees } = require("./data.js");
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/stackathon`
);

const Employee = db.define("employee", {
  name: {
    type: STRING,
  },
  pin: {
    type: INTEGER,
    unique: true,
  },
  birthday: {
    type: DATEONLY,
  },
  department: {
    type: STRING,
  },
});

const seeder = async () => {
  await db.sync({ force: true });
  employees.forEach(async (employee) => await Employee.create(employee));
};

module.exports = {
  seeder,
  models: {
    Employee,
  },
};
