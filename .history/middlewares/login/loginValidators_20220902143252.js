// extarnal import
const { check } = require("express-validator");

const doLoginValidators = [check("username").isLength({ min: 1 })];
