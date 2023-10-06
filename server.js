const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

(async () => {
    try {
      await db.sync();
      console.log('Database synchronized successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
})();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});













































































