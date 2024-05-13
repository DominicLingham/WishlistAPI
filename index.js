const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/test.route')
require('dotenv').config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
})