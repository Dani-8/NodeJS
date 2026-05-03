const express = require('express')
const cors = require('cors')
  
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
// ============================================

// Pre-filled Karachi Favorites
let recipes = [
  { 
    id: 1, 
    title: "Karachi Chicken Biryani", 
    ingredients: "Basmati rice, Chicken, Sela rice, Aloo (potatoes), Biryani Masala, Yogurt, Dried Plums." 
  },
  { 
    id: 2, 
    title: "Anday Wala Burger", 
    ingredients: "Shami Kabab patty, Egg, Bun, Onions, Cabbage, Spicy Green Chutney." 
  },
  { 
    id: 3, 
    title: "Doodh Patti & Paratha", 
    ingredients: "Strong Black Tea, Milk, Sugar, Cardamom, Flaky Crispy Paratha." 
  }
]
// ============================================


app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js + Express server!' });
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})