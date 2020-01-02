const Detail = require("./PostDetails.model");

exports.sendPostDetails = async (req, res) => {
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