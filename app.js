// global imports
var _ = require('lodash');

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./server/public'));

app.listen(port, () => {
    console.log(`Predator or Food is running on port ${port}.`);
});
