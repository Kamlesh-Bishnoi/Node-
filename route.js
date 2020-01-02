module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
        next();
    });
    // Import all the routes here
    // app.use("/app/name", require("./getname"));
    // app.use("/app/detail",require("./getdetails"));
    app.use("/app/categories", require("./categories"));
    app.use("/app/post", require("./PostDetails"));
    app.use("/app/comment", require("./comment"));
    app.use("/app/user",require("./user"));
    app.use("/app/likeAndDislike",require("./likeAndDislike"))
}