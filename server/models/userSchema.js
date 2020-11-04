const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    email: String,
    ratings: [{ type: Schema.Types.ObjectId, ref: 'Ratings' }]
})

module.exports = mongoose.model('User', userSchema)