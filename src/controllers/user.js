const userModel = require('../models/user');
const userController = {};

userController.getAll = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
};

userController.getOne = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.json(user);
};

userController.create = async (req, res) => {
    const user = await userModel.create(req.body);
    res.json(user);
};

userController.update = async (req, res) => {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
};

userController.delete = async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
};

module.exports = userController;
