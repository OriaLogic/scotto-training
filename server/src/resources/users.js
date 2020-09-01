var pgp = require("pg-promise")(/* options */);
var db = pgp("postgres://lucasbonnet@localhost:5432/scottzer");

db.one("SELECT $1 AS value", 123)
  .then(function(data) {
    console.log("DATA:", data.value);
  })
  .catch(function(error) {
    console.log("ERROR:", error);
  });

const User = {
  index: function(req, res) {
    res.send(users);
  },
  create: function(req, res) {
    res.send(users[req.params.id] || { error: "Cannot find user" });
  },
  show: function(req, res) {
    res.send(users[req.params.id] || { error: "Cannot find user" });
  },
  update: function(req, res) {
    res.send(users[req.params.id] || { error: "Cannot find user" });
  },
  destroy: function(req, res, id) {
    res.send("destroyed");
  }
};

export default User;
