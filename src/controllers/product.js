const productModel = require('../models/product');
const productController = {};

productController.getAll = async (req, res) => {
    const products = await productModel.find();
    res.json(products);
};

productController.getOne = async (req, res) => {
    const product = await productModel.findById(req.params.id);
    res.json(product);
};

productController.create = async (req, res) => {
    const product = await productModel.create(req.body);
    res.json(product);
};

productController.update = async (req, res) => {
    const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
};

productController.delete = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
};

module.exports = productController;
