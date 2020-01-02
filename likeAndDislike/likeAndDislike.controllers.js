const Detail = require("./likeAndDislike.model");
exports.sendLikeDetails = async (req, res) => {
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
exports.removeLike=async(req,res)=>{
    if(req.body){
        let retDoc= await Detail.remove();
        return res.json({success:true,data:retDoc,message:"deleted"})
        
    }
    else{
        return res.json({success:false,data:{},message:"not deleted"})
    }
}
exports.countLike=async(req,res)=>{
       if(req.body){
           let postReactions = await Detail.find({});
           let likeCount = 0;
           let dislikeCount = 0

           postReactions.map(item => {
            if (item.like == true) {
                    ++likeCount;
                }
                if (item.like == false) {
                    ++dislikeCount;
                }
           });

            return res.json({success:true,data:"Total Like is: "+likeCount +" "+ "and  Dislike is: "+dislikeCount });   
       } else {
           return res.json({success:false,message:"not found"})
       }
}