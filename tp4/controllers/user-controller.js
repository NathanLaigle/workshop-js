const User = require('../models/User');

exports.get = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create({
      name: req.body.name,
      password: req.body.password,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
