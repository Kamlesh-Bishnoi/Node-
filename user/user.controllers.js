const Detail = require("./user.model");
const bcrypt = require("bcrypt");
const saltRounds = 8;
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

exports.sendUserDetails = async (req, res) => {
  if (req.body) {
    try {
      let retDoc = new Detail(req.body);
      await retDoc.save();
      return res.json(retDoc);
    } catch (err) {
      return res.json({ success: true, data: "", message: err });
    }
  } else {
    return res.json({ success: false, data: "", message: "Parameter Missing" });
  }
};
exports.getUserDetails = async (req, res) => {
  let find = await Detail.find({ $where: "this.name.length >4" });
  return res.json({ success: true, data: find, message: "found" });
};

exports.saveUser = async (req, res) => {
  if (req.body.name && req.body.userName && req.body.password) {
    try {
      console.log("before Hashing", new Date());
      let hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      console.log("after Hashing",new Date());
      let userDetail = await Detail.findOne({ userName: req.body.userName });
      console.log("hashed password", hashedPassword);
      console.log("user Detail", userDetail);

      if (userDetail) {
        let updatedUserDoc = await Detail.findByIdAndUpdate(
          userDetail._id,
          { $set: { password: hashedPassword } },
          { new: true }
        );

        return res.json({
          sucess: true,
          data: updatedUserDoc,
          message: "Logged in"
        });
      } else {
        req.body.password = hashedPassword;
        let userDoc = new Detail(req.body);
        let insertedUserDoc = await userDoc.save();
        return res.json({
          sucess: true,
          data: insertedUserDoc,
          message: "Signed in"
        });
      }
    } catch (err) {
      console.log("error", err);
      return res.json({ status: false, message: err, data: "" });
    }
  } else {
    return res.json({ success: false, password: "", message: "not found" });
  }
};
exports.comparePassword = async (req, res) => {
  if (req.body.userName && req.body.password) {
    try {
      let findUser = await Detail.findOne({ userName: req.body.userName });
      console.log("findUser detail", findUser);
      if (findUser) {
        let comparedPassword = await bcrypt.compare(
          req.body.password,
          findUser.password
        );
        console.log("comapre password is", comparedPassword);
        if (comparedPassword) {
          let token = await jwt.sign({ _id: findUser._id }, "iLoveCricket", {
            algorithm: "HS256"});
          console.log(token);
          let saveToken = await Detail.findByIdAndUpdate(
            findUser._id,
            { $set: { token: token } },
            { new: true }
          );
          console.log("token is:", saveToken);
          return res.json({
            success: true,
            data: saveToken,
            message: "token saved and password matched"
          });
        } else {
          return res.json({
            success: true,
            data: "",
            message: "Incorrect paassword"
          });
        }
      } else {
        return res.json({
          success: false,
          message: "User doesnt exist",
          data: ""
        });
      }
    } catch (err) {
      console.log("error", err);
      return res.json({ status: false, message: err, data: "" });
    }
  } else {
    return res.json({
      success: false,
      message: "Missing parameters",
      data: ""
    });
  }
};

exports.verifyToken =  function(req, res) {
 return res.json({success: true})
};

exports.nodeMailer = async (req,res) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "amanbishnoi569@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text:req.body.text, // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // console.log("message sent:%s",JSON.stringify(info))


}
