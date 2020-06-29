const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const transactions = require('./routes/transactions')
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});


connectDB();

const app = express();

app.use(express.json());
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mode on port${PORT}`.yellow.bold));