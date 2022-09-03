//* Extarnal import
const bcrypt = require("bcrypt");

const getUser = (req, res, next) => {
  res.render("users");
};

//? Add user
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password);
}

module.exports = { getUser };
