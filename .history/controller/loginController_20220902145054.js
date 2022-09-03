// External import
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import createError from "http-errors";

// Internal import
import { findOne } from "../modules/People";

const getLogin = (req, res, next) => {
  res.render("index");
};

async function login(req, res, next) {
  try {
    // find a user who has this email/username
    const user = await findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.username }],
    });

    if (user && user._id) {
      const isValidPassword = await compare(req.body.password, user.password);
      if (isValidPassword) {
        // prepare the user object to generate token
        const userObject = {
          username: user.name,
          mobile: user.mobile,
          email: user.email,
          role: "user",
        };

        // generate token
        const token = sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });

        // set cookie
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        });

        // set logged in user local identifier
        res.locals.loggedInUser = userObject;

        res.render("inbox");
      } else {
        throw createError("login failed ! please try again");
      }
    } else {
      throw createError("login failed ! please try again");
    }
  } catch (err) {
    res.render("index", {
      data: { username: req.body.username },
      errors: {
        common: {
          msg: err.message,
        },
      },
    });
  }
}

export default { getLogin, login };
