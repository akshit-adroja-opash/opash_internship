const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");

const app = express();


/* DB connect */
connectDB();

/* middleware */
app.use(cors());
app.use(express.json());

/* routes */
app.use('/items',itemRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
