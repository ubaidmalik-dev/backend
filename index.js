const express = require('express');
const serverless = require('serverless-http');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Import the router files (ensure the folder names match exactly)
const userRoutes = require('./Routes/adminRoutes');
const productRoutes = require('./Routes/ProductRoutes');
const orderRoutes = require('./Routes/orderRoutes'); // Corrected case

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the routers
app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Export the Express app and its serverless handler
module.exports = app;
module.exports.handler = serverless(app);

// const express = require('express');
// const app = express();
// const db = require('./DatabaseConnection/index');
// require('dotenv').config();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

// // Import the router files
// const userRoutes = require('./Routes/adminRoutes');
// const productRoutes = require('./Routes/ProductRoutes');
// const orderRoutes = require("./routes/orderRoutes");

// app.use(cors()); // Enable CORS for all routes
// app.use(bodyParser.json()); // Parse JSON request bodies
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Use the routers
// app.use('/user', userRoutes);
// app.use('/products', productRoutes);
// app.use("/api/orders", orderRoutes);
// app.get("/", (req, res) => {
//   res.send("Server is running successfully!");
// });
// const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
// app.listen(PORT, () => {
//   console.log(`Service is running on port ${PORT}`);
// });
