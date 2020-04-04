const routes = require("express").Router();

const ResourceController = require("../controllers/resources");

routes.get("/:resource", ResourceController.Index);

module.exports = app => app.use("/resources", routes);