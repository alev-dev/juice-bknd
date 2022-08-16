const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
// Database
require('./database');

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
routes(app);
// Port Number
const port = 3000;

module.exports = app;
