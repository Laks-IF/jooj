require('dotenv').config();

const express = require('express');
const cors = require("cors");

const app = express();

require("./database");

app.use(cors());
app.use(express.json());

require("./routes")(app);

const port = process.env.PORT || 8453;
app.listen(port, () => console.log("Server in listening on port: " + port));