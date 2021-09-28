const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');

const app = express();

app.use(express.json());

app.use(userRoutes);

app.use(express.static(path.join(__dirname, 'app')));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

(async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:2717');
    app.listen(3000);
  } catch (error) {
    console.log(error);
  }
})();
