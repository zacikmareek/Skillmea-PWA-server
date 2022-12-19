const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.json({
    type:['application/json', 'text/plain']
}));

require('./src/routes')(app)

app.listen(3000);
console.log("Server is up and running.");