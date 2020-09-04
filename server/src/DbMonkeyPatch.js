export default class DbMonkeyPatch {
  constructor(db) {
    this.db = db;

    const patchedQueries = ["one", "none", "map"];
    patchedQueries.forEach(query => {
      this[query] = (...args) =>
        this.logQueryBeforeBuild(this.db[query], ...args);
    });
  }

  logQueryBeforeBuild = (dbMethod, ...args) => {
    console.log(...args);
    return dbMethod(...args);
  };
}
