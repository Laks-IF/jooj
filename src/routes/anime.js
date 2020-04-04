const routes = require("express").Router();

const AnimeController = require("../controllers/animes");

const authMiddleware = require("../middlewares/auth");

routes.post("/", authMiddleware(), AnimeController.Create);

routes.delete("/:animeId", authMiddleware(), AnimeController.Delete);

routes.get("/:animeId", authMiddleware(), AnimeController.Get);

module.exports = app => app.use("/animes", routes);