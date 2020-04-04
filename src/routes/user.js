const routes = require('express').Router();

const UserController = require("../controllers/users");

const multer = require('multer')
const { storage } = require("../multer");
const upload = multer({ storage })

const authMiddleware = require("../middlewares/auth");

routes.get("/", authMiddleware(), UserController.Get);

routes.post("/", upload.single('photo'), UserController.Store);
routes.post("/auth", UserController.Auth);
routes.put("/:name", authMiddleware(), upload.single('photo'), UserController.Update);
routes.put("/:name/reset", authMiddleware({ nextWithAuthState: true }), UserController.Reset);
routes.put("/:name/generate-codes", authMiddleware(), UserController.GenerateCodes);

routes.delete("/:name", authMiddleware(), UserController.Delete);

module.exports = (app) => app.use("/users", routes);