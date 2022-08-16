const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        name: String,
        description: String,
        price: Number,
        image: String,
        category: String,
    },
    { timestamps: true, versionKey: false }
);

module.exports = model('Product', productSchema);
