const sequelize = require('../config');
const UserService = require('../service/userService');

const router = require('express').Router();

const userService = new UserService(sequelize)

router.get('/users',async (req,res)=>{
    const user = await userService.getAll();
    res.send(user);
})

router.post('/user',async (req,res)=>{
    const id = await userService.postUser(req.body);
    res.send(id);
})

router.put('/user/:id',async (req,res)=>{
    const id = await  userService.updateUser(req.body,req.params.id);
    res.send(id)
})

router.delete('/user/:id', async (req,res)=>{
    await userService.deleteUser(req.params.id);
})

module.exports = router;