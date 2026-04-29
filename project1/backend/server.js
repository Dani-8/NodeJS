const express = require('express')
const cors = require('cors')
  
const app = express()
const PORT = 5000
// ============================================

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js + Express server!' });
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
