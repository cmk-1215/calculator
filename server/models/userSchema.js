const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    equations: [{ type: Schema.Types.ObjectId, ref: 'Equations' }]
})

module.exports = mongoose.model('User', userSchema)