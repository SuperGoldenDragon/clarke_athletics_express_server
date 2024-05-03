require('dotenv').config();
const express = require('express');
const passport = require('passport');

const app = express();
const routes = require('./src/routes/index.route');

// define port of service
const PORT = process.env.APP_PORT || 8081;

// Middleware
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// define routes
app.use("/", routes);
// Middleware for handling 404 errors
app.use((req, res) => {
    res.status(404).send("This request is not defined.");
});



app.listen(PORT, () => {
    console.log("Clarke server is started on : *:", PORT);
});