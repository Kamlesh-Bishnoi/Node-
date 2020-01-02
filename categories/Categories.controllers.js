const Detail = require("./Categories.model");
var saltRounds = 10;
exports.sendCategoryDetails = async (req, res) => {
    if (req.body) {
        try {
        let retDoc = new Detail(req.body);
        await retDoc.save();
        return res.json(retDoc);
        } catch(err) {

            return res.json({success: true, data: "", message: err});
        }
    }  else {
        return res.json({success: false, data: "", message: "Parameter Missing"});
    }
}
exports.removeCategory=async(req,res)=>{
    if(req.body){
        let retDoc= await Detail.remove();
        return res.json({success:true,data:retDoc,message:"deleted"})
        
    }
    else{
        return res.json({success:false,data:{},message:"not deleted"})
    }
}