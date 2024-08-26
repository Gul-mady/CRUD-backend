const mongoose = require('mongoose');
mongoose.pluralize(null);

var studSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }

})

var studentModel = mongoose.model('Students', studSchema);
module.exports = studentModel 