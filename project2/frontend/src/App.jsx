import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import RecipeList from "./components/RecipeList"

import React, { useState, useEffect } from 'react'

function App() {
  const [recipes, setRecipes] = useState([])
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_URL = "http://localhost:5000/tasks" // Using the new endpoint

  const fetchRecipes = async() => {
    try{
      setLoading(true)

      const res = await fetch(API_URL)
      if(!res.ok) throw new Error("Server connection lost - failed to fetch recipes.")
      
      const data = await res.json()
      setRecipes(data)
      
      setError(null)
    } catch (err) {
      setError("Failed to fetch recipes - It seems the server is down. Please try again later." + err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [])


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-white to-[#f0fdf4] p-4 md:p-12 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto">

          <Header recipes={recipes} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Sidebar />

            <RecipeList recipes={recipes} />
          </div>

          
        </div>
      </div>
    </>
  )
}

export default App
