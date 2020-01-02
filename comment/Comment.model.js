var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var newSchema= new Schema({
    name:{type: String, unique:true},
    comment:{type:String},
    postId:{type:Schema.Types.ObjectId,ref:"post"},
    isDeleted:{type:Boolean,default:false},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
    deletionDate: {type: Date, default: new Date()},
});
module.exports=mongoose.model("comment",newSchema);

