import pgp from "pg-promise";
import DbMonkeyPatch from "./DbMonkeyPatch";

const initOptions = {
  query: e => {
    console.log(e.query);
  }
};

// Preparing the connection details:
const connection = "postgres://lucasbonnet@localhost:5432/scottzer";

// Creating a new database instance from the connection details:
const db = pgp(initOptions)(connection);

// Exporting the database object for shared use:
module.exports = new DbMonkeyPatch(db);
