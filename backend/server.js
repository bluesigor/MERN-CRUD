
const express = require('express');
const formData = require('express-form-data');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();

const app = express();
const port = process.env.PORT || 6000;

app.use(formData.parse());

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

