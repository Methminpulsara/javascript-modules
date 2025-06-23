const http = require("http");
const { json } = require("stream/consumers");
const PORT= 3000; // 3000


const server = http.createServer((req,res)=>{
   res.writeHead(200, { "content-type": "application/json"});
   res.end(JSON.stringify({
    "name":"METHMIN",
       "age":22
   }));
});

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})