const express = require('express');
const app = express();
require("dotenv").config();

const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductRouter = require('./routes/product.router');
const corsOptions = require("./config/cors.config");

require('./models/db');

const PORT = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.json());

// Use corsOptions from config for consistency
app.use(cors(corsOptions));

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});