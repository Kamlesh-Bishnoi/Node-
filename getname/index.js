const fetchRouter = require("router");
var router = fetchRouter();

// router.get("/", require("./getName.controller").getAllName);
// router.get("/:id", require("./getName.controller").getSingleName);
// router.post("/", require("./getName.controller").saveName);
// router.delete("/:id", require('./getName.controller').deleteName);
router.get("/",require("./getDetails.controllers").getAllDetails);
router.get("./:name", require("./getDetails.controllers").getSingleDetails);
router.post("./",require("./getDetails.controllers").sendDetails);
router.delete("./:name",require("./getDetails.controller").deleteName);
module.exports = router;