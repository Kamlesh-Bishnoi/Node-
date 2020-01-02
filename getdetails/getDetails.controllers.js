const Detail = require("./getDetails.model");
exports.getAllDetails = async (req, res) => {
  let foundDetail = await Detail.find({ isActive: true });
  return res.json({
    success: true,
    details: foundDetail,
    message: "details found"
  });
};
exports.getSingleDetails = async (req, res) =>{
  if (req.params && req.params.name){
    let foundOneDetail = await Detail.findOneAndUpdate({ name: req.params.name }, 
                                                       {"$set": {isActive: true}},
                                                       {new : true});
    // if (foundOneDetail && foundOneDetail.mobileNo && foundOneDetail.mobileNo.length) {
    //     // foundOneDetail[mobileNo] = [foundOneDetail[mobileNo][0]];
    //     foundOneDetail[mobileNo] = foundOneDetail[mobileNo].splice(0,1);
    // }
    return res.json({ success: true, data: foundOneDetail, message: "name found"});
  } else {
    return res.json({ success: false, data: {}, message: "name not found" });
  }
};
exports.updateDetails=async(req,res)=>{
  if(req.body && req.body.age){
    let foundAge=await Detail.findOneAndUpdate({age:"5"},{"$set":{age:"50"}},{new:true});
   return res.json({success:true,data:foundAge,message:"age found"});
  }
  else{
    return res.json({success:false , data:{},message:"age not found"})
  }
};
exports.pushMobileNo=async(req,res)=>{
  if(req.body && req.body.mobileNo){
    let foundmobileNo=await Detail.findOneAndUpdate({name:"karan sir"},{$push:{mobileNo:"010100000"}},{new:true});
    return res.json({success:true,data:foundmobileNo, message:"mobileNo pushed"})
  }
  else{
    return res.json({success:false,data:{},message:"no found"})
  }

}
exports.popMobileNo=async(req,res)=>{
  if(req.body && req.body.mobileNo){
    let foundmobileNo=await Detail.findOneAndUpdate({name:"aman"},{$pop:{mobileNo: 1}});
    return res.json({success:true,data:foundmobileNo, message:"mobileNo poped"})
  }
  else{
    return res.json({success:false,data:{},message:"not poped"})
  }

}

exports.popAddress=async(req,res)=>{
  if(req.body && req.body.address){
    let founAddress=await Detail.findOneAndUpdate({name:"karan sir"},{"$unset": {"address.city" :1}},{new:true})
    return res.json({success:true, data:founAddress,message:"address city poped"})
  }
  else{
    return res.json({success:false,data:{},message:"not poped"})
  }
}
exports.matchString=async (req,res)=>{
  if(req.body){
    // let matchString= await Detail.find({name:{$regex: /^A/i}})
    let matchString= await Detail.find({name:{$regex: /^A/}})
    return res.json({success:true,data:matchString,message:"name matched"})
  }
  else{
    return res.json({success:false,data :{},message:"name not matched"})
  }
}
exports.findAge=async (req,res)=>{
  if(req.body){
    let findAge= await Detail.find({age:{"$gt":20,"$lt":70}});
    return res.json({success:true,data:findAge,message:"finded"})
  }
  else{
    return res.json({success:false,data:{},message:"not found"})
  }
}

exports.removeAge=async(req,res)=>{
  if(req.body){
    let removeAge= await Detail.findOneAndRemove({age:50})
    console.log("remove age single", removeAge.name);
    removeAge= await Detail.deleteMany({age:25})
    console.log("remove age many", removeAge);
  }
}
exports.indexUpdate=async(req,res)=>{
  if(req.body){
    let indexUpdate=await Detail.findOneAndUpdate({name:"snow"},
        {$push:{mobileNo:{"$each":["0123","01245"],$position:1}}})
    return res.json({success:true,data:indexUpdate,message:"array index updated"})
  }
  else{
    return res.json({success:false,data:{},message:"not found"})
  }
}
exports.sendDetails = async (req, res) => {
  if (req.body) {
    if (!req.body.name) {
        return res.json({success: false, message: "Missing name", data: {}});
    }

    if (!req.body.age) {
        return res.json({success: false, message: "Missing age", data: {}});
    }

    if (!req.body.mobileNo || req.body.mobileNo.length == 0) {
        return res.json({success: false, message: "Missing Mobile Number", data: {}});
    }

    if (!req.body.address) {
        return res.json({success: false, message: "Missing Address", data: {}});
    }

    try {
        let recDetails = new Detail(req.body);
        await recDetails.save();
        return res.json(recDetails);
    } catch (err) {
        return res.json({ success: false, message: err });
    }
  }
};
