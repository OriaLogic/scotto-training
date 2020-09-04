import db from "../db";
import { keys, map } from "lodash";

const resourceClassGenerator = tableName => {
  const resourceClass = class {
    constructor(row) {
      this.tableName = tableName;

      if (!!row) {
        this.row = row;
        keys(row).map(key => (this[key] = row[key]));
      }
    }

    update = updateObject => {
      const updateKeys = keys(updateObject);
      const values = updateKeys.map(key => updateObject[key]);

      return db
        .none(
          `UPDATE ${tableName} SET ` +
            updateKeys.map((key, i) => `${key}=$${i + 2}`) +
            " WHERE id=$1 ",
          [this.id, ...values]
        )
        .then(() => {
          updateKeys.map(key => (this[key] = updateObject[key]));
          console.log("Called");
          return this;
        })
        .catch(error => {
          console.log("Called catch ?");
          console.error(error);
        });
    };

    toJson = () => {
      const json = {};
      keys(this.row).forEach(key => (json[key] = this[key]));
      return json;
    };

    destroy = () => {
      return db.none(`DELETE FROM ${tableName} WHERE id=$1`, this.id);
    };
  };

  resourceClass.all = () =>
    db.map(`SELECT * FROM ${tableName}`, null, row => new resourceClass(row));

  resourceClass.find = id =>
    db
      .one(`SELECT * FROM ${tableName} WHERE id=$1`, id)
      .then(row => new resourceClass(row))
      .catch(error => console.error(error));

  resourceClass.findBy = async findByDetails => {
    const updateKeys = Object.keys(findByDetails);
    const values = updateKeys.map(key => findByDetails[key]);

    const newRow = await db
      .one(
        `SELECT * FROM ${tableName} WHERE ` +
          updateKeys.map((key, i) => `${key}=$${i + 1}`),
        [tableName, ...values]
      )
      .catch(error => console.error(error));

    return new resourceClass(newRow);
  };

  resourceClass.destroy = async id => {
    const object = await resourceClass.find(id);
    return object.destroy();
  };

  resourceClass.update = async (id, updateObject) => {
    const resource = await resourceClass.find(id);
    console.log(resource);
    const updatedResource = await resource.update(updateObject);
    console.log(updatedResource);
    return updatedResource;
  };

  resourceClass.lastId = async () => 2;

  resourceClass.create = async initialObject => {
    const updateKeys = keys(initialObject).sort();
    const dollars = updateKeys.map((key, i) => `$${i + 1}`);
    const values = updateKeys.map(key => initialObject[key]);
    const row = await db.one(
      `INSERT INTO ${tableName} (${updateKeys.join(
        ", "
      )}) VALUES(${dollars}) RETURNING id`,
      values
    );
    const newUser = resourceClass.find(row.id);
    return newUser;
  };

  return resourceClass;
};

export default resourceClassGenerator;
