import React, { useState, useEffect } from 'react'

export const useRecipes = () => {
    const API_URL = "http://localhost:5000/tasks" // Using the new endpoint

    const [liveServer, setLiveServer] = useState(false)

    useEffect(() => {
        // Check if the backend server is live by making a simple GET request
        const checkServer = async () => {
            try {
                const res = await fetch(API_URL)
                if (res.ok) {
                    setLiveServer(true)
                } else {
                    setLiveServer(false)
                }
            } catch (err) {
                setLiveServer(false)
            }
        }

        checkServer()
    }, [])


    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Let's implement the fetchRecipes function to get recipes from the Server
    const fetchRecipes = async () => {
        try {
            setLoading(true)

            const res = await fetch(API_URL)
            if (!res.ok) throw new Error("Server connection lost - failed to fetch recipes.")

            const data = await res.json()
            setRecipes(data)

            setError(null)
        } catch (err) {
            setError("Failed to fetch recipes - It seems the server is down. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRecipes()
    }, [])


    // Now let's implement the addRecipe function to send new recipes to the Server
    const addRecipe = async (e) => {
        e.preventDefault()

        if (!name.trim() || !ingredients.trim()) {
            setError("Please fill in all fields.")
            return
        }
        setError(null)
        // ------------------------

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: name, ingredients: ingredients })
            })

            const newRecipes = await res.json()

            setRecipes(prev => [...prev, newRecipes])
            setName("")
            setIngredients("")
        } catch (err) {
            setError("Failed to add recipe - It seems the server is down. Please try again later.")
        }
    }


    // Now Let's implement the deleteRecipe function to remove recipes from the Server
    const deleteRecipe = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            })

            setRecipes(prev => prev.filter(recipe => recipe.id !== id))
        } catch (err) {
            setError("Failed to delete recipe - It seems the server is down. Please try again later.")
        }
    }


    return {
        recipes, name, setName, ingredients, setIngredients,
        loading, error, liveServer, addRecipe, deleteRecipe, fetchRecipes
    }
}