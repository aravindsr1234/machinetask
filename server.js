const express = require('express');
const cors = require('cors');
const connectDb = require('./server/database/connection')

require('dotenv').config();

const app = express();

app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDb();

app.use('/', require('./server/routes/addTaskRouter'));

const port = process.env.port;
console.log(port);
app.listen(port, () => {
    console.log(`server is  running on 3003`);
});