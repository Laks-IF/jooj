require('dotenv').config();

const express = require('express');
const cors = require("cors");

const PORT = process.env.PORT || 8453;

const app = express();

require("./database");

app.use(cors());
app.use(express.json());

require("./routes")(app);


app.listen(PORT, () => console.log("Server in listening on port: " + PORT));