const fetchRouter = require("router");
var router = fetchRouter();

router.post("", require("./Comment.controllers").sendCommentDetails);


module.exports = router;
