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

  // Let's implement the fetchRecipes function to get recipes from the Server
  const fetchRecipes = async() => {
    try{
      setLoading(true)

      const res = await fetch(API_URL)
      if(!res.ok) throw new Error("Server connection lost - failed to fetch recipes.")
      
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
  const addRecipes = async(e) => {
    e.preventDefault()

    if(!name.trim() || !ingredients.trim()) {
      setError("Please fill in all fields.")
      return
    }
    setError(null)
    // ------------------------

    try{
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title: name, ingredients: ingredients})
      })

      const newRecipes = await res.json()

      setRecipes(prev => [...prev, newRecipes])
      setName("")
      setIngredients("")
    }catch(err){
      setError("Failed to add recipe - It seems the server is down. Please try again later.")
    }
  }


  // Now Let's implement the deleteRecipe function to remove recipes from the Server
  const deleteRecipe = async(id) => {
    try{
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      })

      setRecipes(prev => prev.filter(recipe => recipe.id !== id))
    }catch(err){
      setError("Failed to delete recipe - It seems the server is down. Please try again later.")
    }
  }





  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-white to-[#f0fdf4] p-4 md:p-12 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">

          <Header recipes={recipes} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-15">
            <Sidebar 
              // addRecipe={addRecipe}
              // name={name}
              // setName={setName}
              // ingredients={ingredients}
              // setIngredients={setIngredients}
              error={error}
              fetchRecipes={fetchRecipes}
            />

            <RecipeList recipes={recipes} />
          </div>

          
        </div>
      </div>
    </>
  )
}

export default App
