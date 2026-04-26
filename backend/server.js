const http = require("http");

const server = http.createServer((req, res) => {
  // 1. HEADERS: Tells the browser "It's okay for React to access this"
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Content-Type", "text/plain");

  // 2. RESPONSE: Sending the data
  res.writeHead(200);
  res.end("Hello from Node.js server!");
});

// 3. LISTEN: The server stays awake on port 5000
server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});