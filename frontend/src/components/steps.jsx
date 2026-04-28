import { FolderTree, Server, Send, Laptop, Cloud } from 'lucide-react'


const steps = [
    {
        title: "1. Project Architecture",
        icon: <FolderTree className="text-rose-500" />,
        color: "bg-rose-50",
        content: "Structure your project first. We keep Logic (Backend) and UI (Frontend) in separate worlds.",
        code: `my-app/
├── backend/
│   └── server.js      <-- Node.js + Express Logic
│   └── package.json   <-- Backend dependencies & start script
|
└── frontend/      <------ Vite Project!
    └── src/
        └── App.jsx    <-- React Logic`,
        details: [
            "Backend: Handles data and requests.",
            "Frontend: Shows the UI to users.",
            "Root: The main folder holding both."
        ]
    },
    {
        title: "2. The Backend (Node.js)",
        icon: <Server className="text-emerald-500" />,
        color: "bg-emerald-50",
        content: "Your core Node.js server using the built-in 'http' module.",
        code: `const http = require("http");

const server = http.createServer((req, res) => {
  // CORS: Allows React to talk to Node
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Content-Type", "text/plain");

  res.writeHead(200);
  res.end("Hello from Node.js server!");
});

server.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});`,
        details: [
            "res.setHeader: Crucial for fixing 'CORS' errors.",
            "res.end: Sends the final message to the client.",
            "port 5000: The server's specific 'address'."
        ]
    },
    {
        title: "3. Postman (The Bridge)",
        icon: <Send className="text-rose-500" />,
        color: "bg-rose-50",
        content: "Testing the 'Pipe' before building the frontend. Does the server respond?",
        code: `URL: http://localhost:5000
Method: GET

Expected Response:
"Hello from Node.js server!"
Status: 200 OK`,
        details: [
            "GET: Used to ask for data.",
            "POST: Used to send data (Body > raw > JSON).",
            "Verification: Ensures backend works independently."
        ]
    },
    {
        title: "4. The Frontend (React)",
        icon: <Laptop className="text-emerald-500" />,
        color: "bg-emerald-50",
        content: "Using async/await to fetch data from your local or production server.",
        code: `async function getData() {
  const localURL = "http://localhost:5000"

  try {
    const res = await fetch(localURL);
    const data = await res.text();
    setServerMsg(data); // State Update
  } catch (e) {
    console.log("Failed to connect...");
  }
}`,
        details: [
            "useEffect: Runs the fetch when the page loads.",
            "useState: Saves the message to show it on screen.",
            "try/catch: Prevents the app from crashing if server is off."
        ]
    },
    {
        title: "5. Deployment (Going Live)",
        icon: <Cloud className="text-rose-500" />,
        color: "bg-rose-50",
        content: "Host your apps so the world can see them. Use Railway for Backend and Vercel for Frontend.",
        code: `Backend (Railway):
1. Connect GitHub.
2. Select "backend" as Root Directory.
3. Add Start Script in package.json: 
    scripts: { "start": "node server.js"}
4. Deploy and get your Production URL.


Frontend (Vercel):
1. Connect GitHub.
2. Select "frontend" as Root Directory.
3. Build: npm run build
4. Output: dist`,
        details: [
            "ROOT DIRECTORY: You MUST select the specific folder (backend or frontend) after selecting your repo.",
            "START SCRIPT: Railway needs (package.json) in backend folder to know how to start your server.",
            "VERCEL: Auto-detects Vite, but ensure 'dist' is the output folder & build command is correct."
        ]
    }
];


export default steps