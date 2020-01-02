var http=require("http");
var bodyParser = require("body-parser");
var express = require("express");
const customer=require("./controllers/customer").customer;
// var data = [];
var data={}

var app = express();
let port = 8080;
// console.log(customer);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({ type: 'application/json' }));

// app.get('/get_your_name/:username', function (req, res) {
//     console.log("Came here", req.params);
//   res.send('welcome params, ' + req.params.username)
// })

// app.get('/get_your_name', function (req, res) {
//     console.log("Came here", req.query);
//   res.send('welcome query, ' + req.query.username)
// })

// app.post('/get_your_name', function (req, res) {
//     console.log("Came here", req.body);
//   res.send('welcome body, ' + req.body.username)
// })

// app.delete('/get_delete/:name',function (req,res){
//     console.log("Came here for customer id delete", req.params);

    // for (let index in customer) {
    //     if (customer[index]['firstname'] == req.params.name) {
    //         delete customer[index]['firstname'];
    //     }
    // }

//     console.log("customer", customer);
//     res.send("cutomer id deleted" +req.params.name);
// });
app.post('/post_name',function(req,res){  
    res.send("data is " + req.body);
    // using JSON 
     data=req.body;
     console.log(data);

    // Using Array
    // data.push(req.body);
    // return res.json({returnData: data});
});
app.get('/get_name',function(req,res){
    console.log(data);
    res.send("get data " + data.name);
    
    console.log(data.name)

})
// app.put('/put_name/:name'),function(req,res){
//     res.send("put req " + req.params.name);
//     data=req.params.name;
//     console.log(data)
// }
// app.delete('/get_delete',function(req,res){
//     console.log(data);
//     delete data.name;
//     res.send("data is deleted " +req.params.name);

//     console.log(data);
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//params - URL/:username // web url
//Query - URL?username=<value> // weburl
//Body - X-www-form-urlencoded  // App, postman


// *******************************************************************

// First class Notes
var http=require("http")
var express=require("express")
var bodyParser = require("body-parser");
var app=express();
let port =4050;
var names={} 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({ type: 'application/json' }));

//  http.createServer(function(req,res){
//      res.writeHead(200,{'content-type':'text/html'});
//      res.end("hello World!");
//  }).listen(2020);

// Using param 
// app.get('/get_your_name/:username', function (req, res) {
//     console.log("Came here", req.params);
//   res.send('welcome params, ' + req.params.username)
// })

// using Query
// app.get("/get_name",function(req,res){
//     console.log("name is " ,req.query.name )
//     res.send("hello " + req.query.name)
// })
 
// Post 
app.post("/post_name" ,function(req,res){
    res.send("great " + req.body);
    names=req.body
    // console.log(names)
 

});
 app.get('/get_name',function(req,res){
     console.log(names);
    res.send("get data " + names.name1);
    // console.log(names.name1);
 })
 app.delete('/delete_name',function(req,res){
     console.log(names);
    for( let i of Object.keys(names)){
        delete names[i]
    }
    //  delete names.name2;
     res.send("deleted " + req.params);
     console.log(names);
 })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
console.log("server running")
