const express = require('express')
const cors = require('cors')
  
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
// ============================================

// Pre-filled
let recipes = [
  { 
    id: 1, 
    title: "Karachi Chicken Biryani", 
    ingredients: "Basmati rice/Sela rice, Chicken,  Aloo, Biryani Masala, Yogurt, Dried Plums." 
  },
  { 
    id: 2, 
    title: "Anday Wala Burger", 
    ingredients: "Shami Kabab patty, Egg, Bun, Onions, Cabbage, Spicy Green Chutney." 
  },
  { 
    id: 3, 
    title: "Doodh Patti & Paratha", 
    ingredients: "Strong Black Tea, Milk, Sugar, Flaky Crispy Paratha." 
  }
]
// ============================================

// GET: Fetch all recipes
app.get('/tasks', (req, res) => {
  res.json(recipes);
})


// POST: Add a new recipe
app.post('/tasks', (req, res) => {
  const newRecipe = {
    id: Date.now(),
    title: req.body.title,
    ingredients: req.body.ingredients
  }

  recipes.push(newRecipe)
  res.status(201).json(newRecipe)
})


// DELETE: Remove a recipe by ID
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)

  recipes = recipes.filter(recipes => recipes.id !== id)

  res.json({message: "Recipe deleted successfully" })
})


// PUT: Update a recipes by ID
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const recipe = recipes.find(recipe => recipe.id === id)

  if(recipe){
    recipe.title = req.body.title || recipe.title
    recipe.ingredients = req.body.ingredients || recipe.ingredients

    res.json({ message: "Recipe updated successfully", recipe })
  }else{
    res.status(404).json({ message: "Recipe not found" });
  }
})



app.listen(PORT, () => {
  console.log(`KitchenVault running at http://localhost:${PORT}`)
})