const fetchRouter = require("router");
var router = fetchRouter();

router.post("", require("./PostDetails.controllers").sendPostDetails);

module.exports = router;
