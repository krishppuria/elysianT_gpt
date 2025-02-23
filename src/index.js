const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// ------------------------------------------------
// Use middlewares
// ------------------------------------------------
app.use(cors());
app.use(express.json());

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
