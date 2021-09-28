const { model, Schema } = require('mongoose');

module.exports = model(
  'user',
  new Schema({
    name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  })
);
