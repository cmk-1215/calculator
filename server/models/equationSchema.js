const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const equationSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    equation: String
})

module.exports = mongoose.model('Equation', equationSchema)