require('dotenv/config');

const express = require('express');
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

require("./database");

app.use(cors());
app.use(express.json());

require("./routes")(app);


app.listen(PORT, () => console.log("Server in listening on port: " + PORT));