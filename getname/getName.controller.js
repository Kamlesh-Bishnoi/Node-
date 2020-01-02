const NAME = require("./getName.model");

exports.getAllName = async (req, res) => {
   let retDoc = await NAME.find({isDeleted: false});
   return res.json({success: true, data: retDoc, message: "Data found"});
}

exports.getSingleName = async (req, res) => {
    if (req.params && req.params.id) {
        let retSingleDoc = await NAME.findOne({_id: req.params.id});
        return res.json({success: true, data: retSingleDoc, message: "Data found"});
    } else {    
        return res.json({success: false, data: "", message: "Parameter Missing"});
    }
}

exports.saveName = async (req, res) => {
    if (req.body && req.body.name) {
        try {
        let retDoc = new NAME({name: req.body.name});
        await retDoc.save();
        return res.json(retDoc);
        } catch(err) {

            return res.json({success: true, data: "", message: err});
        }
    }  else {
        return res.json({success: false, data: "", message: "Parameter Missing"});
    }
}

exports.deleteName = async (req, res) => {
    if (req.params && req.params.id) {
        try {
            await NAME.findOneAndUpdate({_id: req.params.id}, {"$set": {isDeleted: true}});
            return res.json({success: true, data: "", message: "Delete successfully"});
        } catch(err) {
            return res.json({success: true, data: "", message: err});
        }
    }  else {
        return res.json({success: false, data: "", message: "Parameter Missing"});
    }
}
