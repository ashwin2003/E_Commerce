const bcrypt = require("bcryptjs");

const Users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ashwin",
    email: "ashwin@ashwin.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Sahil",
    email: "sahil@sahil.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

module.exports = Users;
