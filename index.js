const express = require('express');
const app = express();
const dict = require('./src/routes/dict')

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", dict);

const port = process.env.PORT || 5001;

var server = app.listen(port, function () {
    console.log(`App listening on port ${port}`)
})

module.exports = server