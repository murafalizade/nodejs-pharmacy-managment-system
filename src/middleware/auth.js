const dotenv = require("dotenv");
const UserService = require("../service/userService");
const Jwt = require("../util/jwt");
dotenv.config();

const userService = new UserService();

module.exports.auth = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      req.headers.authorization.split(" ")[0] === "Bearer" ? "" : res.status(401).send("Unauthorized");
      const token = req.headers.authorization.split(" ")[1];
      const decoded = Jwt.verify(token);
      const user = userService.getById(decoded.id);
      if(!user) {
        return res.status(400).send("User not found");
      }
      req.userId = decoded.id;
    } else {
      return res.status(401).send("Unauthorized");
    }
    next();
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
};
