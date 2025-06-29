const http = require("http");
const { json } = require("stream/consumers");
const PORT= 3000; // 3000

const userService = require("./service/user-service.js")


const server = http.createServer((req,res)=>{

    if (req.method == "POST" && req.url == "/api/create-user") {
        res.writeHead(200,{"content-type": "application/json"})
        res.end(JSON.stringify({
            "status":"Added ! "
        }))
    }


if (req.method == "GET" && req.url == "/api/get-user") {
   res.writeHead(200, { "content-type": "application/json"});
   res.end(JSON.stringify(userService.getUser()));
  }
});



server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})