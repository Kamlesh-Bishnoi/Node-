var mongoose=require("mongoose");

var Schema=mongoose.Schema;
var newSchema= new Schema({
    name: {type:String},
    token:String,
    userName:{type:String,unique:true},
    password:{type:String},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
    deletionDate: {type: Date, default: new Date()},
});
module.exports=mongoose.model("user",newSchema);