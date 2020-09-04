const logRequest = (req, resourceName, action) => {
  let paramString = "";
  if (req.params.id) paramString += `with id: ${req.params.id}`;
  if (req.query) paramString += ` with query: ${JSON.stringify(req.query)}`;

  console.log(
    `Hit path: ${req.path}. Redirecting to ${resourceName}'s ${action} action ${paramString}`
  );
};

const resourceControllerGenerator = ({ resourceName, ResourceClass }) => ({
  index: async (req, res) => {
    logRequest(req, resourceName, "index");

    const resources = await ResourceClass.all();
    res.send(resources.map(resource => resource.toJson()));
  },
  create: async (req, res) => {
    logRequest(req, resourceName, "create");

    const resource = await ResourceClass.create(req.query);
    res.send(resource.toJson());
  },
  show: async (req, res) => {
    logRequest(req, resourceName, "show");

    const resource = await ResourceClass.find(req.params.id);

    res.send(resource.toJson());
  },
  update: async (req, res) => {
    logRequest(req, resourceName, "update");

    console.log();
    const resource = await ResourceClass.update(req.params.id, req.query);
    res.send(resource.toJson());
  },
  destroy: async (req, res) => {
    logRequest(req, resourceName, "destroy");

    const resource = await ResourceClass.destroy(req.params.id);
    res.send("OK");
  }
});

export default resourceControllerGenerator;
