const fetchRouter = require("router");
var router = fetchRouter();
var jwt =require("jsonwebtoken");
const Detail = require("./user.model");

function checkAuth(req, res, next) {
    jwt.verify(req.body.token, "K!a2R#a4N%", async function(err, decoded) {
        if (err) return res.json({ success: false, message: "Not Authorized" });;
        console.log(decoded);
        let findUser = await  Detail.findOne({ _id: decoded._id, token : req.body.token });
       
        if (findUser) {
            req.user = decoded;
            next();
        } else {
            return res.json({ success: false, message: "Not Authorized" });
        }
    });
}

router.post("", require("./user.controllers").sendUserDetails);
router.get("/find", require("./user.controllers").getUserDetails);
router.post("/bcrypt",require("./user.controllers").saveUser);
router.post("/compare",require("./user.controllers").comparePassword);
router.post("/verify", checkAuth, require("./user.controllers").verifyToken);
router.post("/nodeMailer",require("./user.controllers").nodeMailer)

module.exports = router;
