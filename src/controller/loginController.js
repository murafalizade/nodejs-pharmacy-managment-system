const UserService = require("../service/userService");
const Cyrption = require("../util/cryption");
const Jwt = require("../util/jwt");

const userService = new UserService();

module.exports.login = async (req, res) => {
    // #swagger.tags = ['User']
    const user = await userService.getUserByEmail(req.body.email);
    if (!user) {
        return res.status(400).send("User not found");
    }
    const match = Cyrption.comparePassword(req.body.password, user.password);
    if (!match) {
        return res.status(400).send("Password is incorrect");
    }
    const token = Jwt.sign({ id: user.id });
    res.send({token});
}