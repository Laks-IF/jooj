require('dotenv/config');

const express = require('express');
const app = express();
const cors = require("cors");

require("./database");

app.use(cors());
app.use(express.json());

require("./routes")(app);

app.listen(process.env.PORT || 8080);