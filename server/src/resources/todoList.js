const TodoList = {
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

export default TodoList;
