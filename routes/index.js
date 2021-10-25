const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
// const feedbackRouter = require('./feedback');
// const diagnosticsRoute = require("./diagnostics");
// TODO: import your diagnostics route

const app = express();

app.use('/notes', notesRouter);
// app.use('/feedback', feedbackRouter);
// app.use("/diagnostics", diagnosticsRoute)
// TODO: Initialize diagnostics route

module.exports = app;
