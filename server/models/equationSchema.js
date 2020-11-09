const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const equationSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    problem: String,
}, {
    timestamps: true,
})

module.exports = mongoose.model('Equation', equationSchema)