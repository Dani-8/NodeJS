const express = require('express')
const cors = require('cors')

const mongoose = require("mongoose")
const jtw = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
// =====================================


app.get("/", (req, res) => {
    res.send("HI")
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)    
})