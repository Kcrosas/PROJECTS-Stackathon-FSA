const port = process.env.PORT || 3000;
const app = require("./app");
const { seeder } = require("./database.js");

const start = async () => {
  try {
    await seeder();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
