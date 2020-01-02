var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var newSchema= new Schema({
    name:{type: String, unique:true},
    age:Number,
    mobileNo:[String],
    address:{
        city:String,
        state:String,
        country:String,
        pinCode:Number,
    },
    isActive:{type:Boolean, default:false},
    dateOfBirth:{type:Date,default:null},
    isDeleted: {type : Boolean, default: false},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
    deletionDate: {type: Date, default: new Date()},
   
});
module.exports=mongoose.model("detail",newSchema);
