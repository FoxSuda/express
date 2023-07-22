"use strict";
const { Schema, model } = require('mongoose');
const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    userId: {
        type: String,
        required: true
    }
});
module.exports = model('Users', schema);
module.exports = model('Items', itemSchema);
