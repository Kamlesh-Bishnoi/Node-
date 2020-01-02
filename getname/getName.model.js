var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var nameSchema = new Schema({
    name: {type: String, unique: true},
    isDeleted: {type : Boolean, default: false},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
    deletionDate: {type: Date, default: new Date()},
});
module.exports = mongoose.model('name', nameSchema);

