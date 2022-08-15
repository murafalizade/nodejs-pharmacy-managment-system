const User = require('../models/user')
class UserService{
    
    constructor(sequelize){
        this.user = User(sequelize);
    }

    async getAll(){
        const user =  await this.user.findAll();
        return user
    }

    async postUser(data){
        const user = await this.user.create(data);
        return user.id.toString();
    }

    async getById(id){
        const user = await this.user.findByPk(id)
        return user;
    }

    async updateUser(data,id){
        const user = await this.user.update( data, { where: { id } })
        return user.id;
    }

    async deleteUser(id){
        await this.user.destroy({where:{id}});
        return null
    }
}

module.exports = UserService;