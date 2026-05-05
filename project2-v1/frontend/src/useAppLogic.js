import { useState, useEffect } from "react"

export const useAppLogic = () => {
    const API_URL = "http://localhost:5000/tasks" // Using the new endpoint

    // =====================================================================================

    const [tasks, setTasks] = useState([])
    const [form, setForm] = useState({ title: "", details: "" })
    const [editingId, setEditingId] = useState(null)


    const load = async () => {
        try {
            const res = await fetch(API_URL)
            const data = await res.json()
            setTasks(data)
        } catch (err) {
            console.error("Server offline")
        }
    }

    useEffect(() => { load(); }, [])


    // Create or Update
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.title.trim()) return alert("Title is required")

        const method = editingId ? "PUT" : "POST"
        const url = editingId ? `${API_URL}/${editingId}` : API_URL


        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })


        if (res.ok) {
            load()
            setForm({ title: "", details: "" })
            setEditingId(null)
        }
    }


    // Delete
    const remove = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        load();
    }


    return { tasks, setTasks, form, setForm, editingId, setEditingId, remove, handleSubmit }

}


