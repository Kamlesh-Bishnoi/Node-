const fetchRouter = require("router");
var router = fetchRouter();

router.get("/",require("./getDetails.controllers").getAllDetails);
router.get("/:name", require("./getDetails.controllers").getSingleDetails);
router.post("", require("./getDetails.controllers").sendDetails);
router.patch("/update_details",require("./getDetails.controllers").updateDetails);
router.patch("/push_mobile_number",require("./getDetails.controllers").pushMobileNo);
router.patch("/pop_mobile_number",require("./getDetails.controllers").popMobileNo);
router.patch("/pop_address",require("./getDetails.controllers").popAddress);
router.patch("/matching",require("./getDetails.controllers").matchString);
router.patch("/find",require("./getDetails.controllers").findAge);
router.delete("/",require("./getDetails.controllers").removeAge);
router.patch("/indexUpdate",require("./getDetails.controllers").indexUpdate)

// router.delete("./:name",require("./getDetails.controllers").deleteName);

module.exports = router;



// if (foundOneDetail && foundOneDetail.mobileNo && foundOneDetail.mobileNo.length) {
//     // foundOneDetail[mobileNo] = [foundOneDetail[mobileNo][0]];
//     foundOneDetail[mobileNo] = foundOneDetail[mobileNo].splice(0,1);
// }