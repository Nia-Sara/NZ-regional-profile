//server set up. (node.js server setup through port 3000)
const express = require('express');
const app = express();
app.listen (3000,() => console.log ('listening at 3000'));
app.use(express.static('public'));


