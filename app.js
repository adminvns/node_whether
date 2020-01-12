var http =require("http");
http.createServer(function(req, res){
  res.end("Hello")
}).listen(3000);
console.log("server started");
console.log("server running on http://127.0.0.1:3000/");
