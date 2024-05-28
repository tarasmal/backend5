const {Schema, model} = require("mongoose");
const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: String,
});
const user = new model('User', schema);
module.exports = user;