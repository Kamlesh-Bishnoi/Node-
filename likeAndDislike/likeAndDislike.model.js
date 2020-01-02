var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var newSchema= new Schema({
    like:{type:Boolean},
    userId:{type:Schema.Types.ObjectId,ref:"user"},
    postId:{type: Schema.Types.ObjectId, ref: "post"},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
});
module.exports=mongoose.model("like",newSchema);

