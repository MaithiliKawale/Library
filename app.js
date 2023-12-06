const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/index") {
    res.statusCode = 200;
    const dataa = fs.readFileSync("index.html");
    res.end(dataa.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    const data = fs.readFileSync("about.html");
    res.end(data.toString());
  } else if (req.url == "/login") {
    res.statusCode = 200;
    const data = fs.readFileSync("login.html");
    res.end(data.toString());
  } 
  //    else if(req.url=='/contact'){
  //     res.statusCode=200;
  //     res.end('<h1>wellocome to contact page</h1>')
  //    }
  else {
    res.statusCode = 404;
    res.end("<h1>page not found</h1>");
  }
});
server.listen(port, () => {
  console.log(`server is running at ${port}`);
});

//  res.writeHead(200, {'Content-Type': 'text/html'})
//  fs.readFile('index.html', function(error, data){
//     if(error){
//         res.writeHead(404)
//         res.writeHead('Error: File Not Found')
//     }else{
//         res.write(data)
//     }
//     res.end()
//  })

// res.writeHead(200, {'Content-Type': 'text/css'})
//  fs.readFile('style.css', function(error, data){
//     if(error){
//         res.writeHead(404)
//         res.writeHead('Error: File Not Found')
//     }else{
//         res.write(data)
//     }
//     res.end()
// })

// })

// server.listen(port, function(error){
//     if(error){
//         console.log('something went wrong', error)
//     }else{
//         console.log('Server is listening on port ' + port)
//     }
// })
