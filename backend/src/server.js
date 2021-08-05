const express = require('express');
const routes = require('./routes');
const path = require('path')
const cors = require('cors')

require('./database')

const dir = path.join(__dirname, './assets');
const app = express();
app.use(express.static(dir));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);