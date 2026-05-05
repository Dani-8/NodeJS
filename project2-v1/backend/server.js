const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
// ==============================================

let tasks = [
    { id: 1, title: "Learn Express.js", details: "Master the basics of routing and middleware" },
    { id: 2, title: "Build a Frontend", details: "Create a clean React UI with Tailwind" }
]

// READ - Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks)
})


// CREATE - Add a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title,
        details: req.body.details
    }
    tasks.push(newTask)

    res.status(201).json(newTask)
})


// UPDATE - Edit an existing task
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = tasks.findIndex(t => t.id === id)

    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body }
        res.json(tasks[index])
    } else {
        res.status(404).json({ message: "Task not found" })
    }
})


// DELETE - Remove a task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id)
    tasks = tasks.filter(t => t.id !== id)
    res.json({ message: "Task deleted successfully" })
})




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
