const express = require('express');
const app = express();

//config
const dotenv = require('dotenv');
dotenv.config();
const dbconfig = require('./utils/dbconfig');
dbconfig();

//mw
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const productsRouter = require('./routes/product');

app.use('/products', productsRouter);

module.exports = app;