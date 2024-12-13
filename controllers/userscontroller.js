const usersModel = require('../models/usersSchema');

const getUsers = async(req, res) => {
    const users = await usersModel.find();
    if(!users) {
        res.status(404).json({msg : "User not Found"});
    }
    res.status(200).json(users);
}

const insertUsers = async(req, res) => {
    const users = await usersModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: 'user'
    });
    try {
        if(!users) {
            res.status(404).json({msg: "User not created"});
        }
        users.save();
        res.status(201).json({msg : "User Created Successfully"});
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

const getUserbyId = async(req, res) => {
    const id = req.params.id;
    try {
        const user = await usersModel.findById(id);
        if(!user) {
            res.status(404).json({msg : "User not Found"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

module.exports = {
    getUsers,
    insertUsers,
    getUserbyId
}
