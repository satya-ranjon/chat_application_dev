//* Extarnal import
const bcrypt = require("bcrypt");

const getUser = (req, res, next) => {
  res.render("users");
};

//? Add user
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  //? save user or send error
  try {
    const result = await newUser.save();
    res.status(200).join({
      message: "User was added successfully !",
    });
  } catch {}
}

module.exports = { getUser };
