const bcrypt = require('bcrypt');

class Cyrption{
    static hashPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    }
    static comparePassword(password, hash){
        return bcrypt.compareSync(password, hash);
    }
}

module.exports = Cyrption;