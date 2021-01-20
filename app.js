const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const dbconfig = require('./utils/dbconfig');

dbconfig();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;