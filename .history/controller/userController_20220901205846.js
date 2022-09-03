//* Extarnal import
const bcrypt = require("bcrypt");
const { unlink } = require("fs");
const path = require("path");

//* Intarnal import
const User = require("../modules/People");

//? get user
const getUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.render("users", {
      users: users,
    });
  } catch (err) {
    next(err);
  }
};

//? Add user
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
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
    res.status(200).send({
      message: "User was added successfully !",
    });
  } catch (err) {
    res.status(500).send({
      errors: {
        common: {
          msg: "Unkown error occured !",
        },
      },
    });
  }
}

async function removeUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    });

    //? remove user avatar if any
    if (avatar) {
      unlink(
        path.join(__dirname, `/../public/uploads/avatars/${user.avatar}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }

    res.status(200).send({
      message: "User was removed successfully!",
    });
  } catch (err) {
    res.status(500).send({
      errors: {
        common: {
          msg: "Could not delete the user!",
        },
      },
    });
  }
}
module.exports = { getUser, addUser, removeUser };
