const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const secret = process.env.SECRET_KEY;


class Jwt {
  static sign(payload) {
    return jwt.sign(payload, secret);
  }

  static verify(token) {
    return jwt.verify(token, secret);
  }
}

module.exports = Jwt;
