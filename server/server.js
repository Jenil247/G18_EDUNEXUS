const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});