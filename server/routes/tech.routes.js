const techsCtl = require("../controllers/techs.controller");

module.exports = (app) => {
  app.get("/api/techs", techsCtl.getAll);
  app.post("/api/techs", techsCtl.create);
  app.get("/api/techs/:id", techsCtl.getOne);
  app.put("/api/techs/:id", techsCtl.update);
  app.delete("/api/techs/:id", techsCtl.delete);
};
