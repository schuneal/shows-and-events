const express = require('express'),
    timeoutTest = require('express-request-timeout-test');
const cors = require('cors');
const router = require("./routes");
const mongoose = require("mongoose");
const { server } = require("./config");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const { test_timeout = 160000 } = server;
app.use(timeoutTest({ timeout: test_timeout, check_auth: false }));

mongoose.connect(server.url);
const db = mongoose.connection;
db.on("connected", () => console.info('MongoDB connection is successful'));
db.on('error', (err) => console.error("MongoDB connection is failed ", err));

app.use('/', router.shows);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

module.exports = app;