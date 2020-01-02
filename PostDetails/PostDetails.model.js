var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var newSchema= new Schema({
    title:{type: String, unique:true},
    description:{type:String},
    images:[{type: String}],
    categoryId : [{type: Schema.Types.ObjectId, ref: "category"}],
    isDeleted:{type:Boolean,default:false},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
    deletionDate: {type: Date, default: new Date()},
});

module.exports=mongoose.model("post",newSchema);