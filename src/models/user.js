const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        username: String,
        email: String,
        password: String,
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        imageProfile: String,
    },
    { timestamps: true, versionKey: false }
);

module.exports = model('User', userSchema);
