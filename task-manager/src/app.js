const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// Debugging middleware to log the request body
app.use((req, res, next) => {
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Request body:", req.body);
  }
  next();
});

app.use("/api", taskRoutes);

// Route to handle Chrome DevTools verification file
// This prevents 404 errors in the browser console
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(200).json({});
});

module.exports = app;
