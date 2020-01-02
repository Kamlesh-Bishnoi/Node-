const fetchRouter = require("router");
var router = fetchRouter();
router.post("", require("./Categories.controllers").sendCategoryDetails);
router.delete("/delete",require("./Categories.controllers").removeCategory);

module.exports = router;
