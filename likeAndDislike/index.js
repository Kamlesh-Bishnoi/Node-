const fetchRouter = require("router");
var router = fetchRouter();

router.post("", require("./likeAndDislike.controllers").sendLikeDetails);
router.delete("/delete",require("./likeAndDislike.controllers").removeLike);
router.get("/countlike",require("./likeAndDislike.controllers").countLike);

module.exports = router;
