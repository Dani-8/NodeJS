import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import RecipeList from "./components/RecipeList"

import { useRecipes } from "./useRecipes"
// ===============================================

function App() {
  const { 
    recipes, name, setName, ingredients, setIngredients, 
    loading, error, liveServer, addRecipe, deleteRecipe, fetchRecipes 
  } = useRecipes()

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-white to-[#f0fdf4] p-4 md:p-12 font-sans text-slate-800">
        <div className="max-w-6xl mx-auto">

          <Header recipes={recipes} liveServer={liveServer} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-15">
            <Sidebar
              addRecipe={addRecipe}
              name={name}
              setName={setName}
              ingredients={ingredients}
              setIngredients={setIngredients}
              error={error}
              fetchRecipes={fetchRecipes}
            />

            <RecipeList
              loading={loading}
              recipes={recipes}
              deleteRecipe={deleteRecipe}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
