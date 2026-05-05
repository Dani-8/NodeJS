import { useState } from "react"
import { Code2, BookOpen, ChevronLeft } from 'lucide-react'

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import RecipeList from "./components/RecipeList"
import SystemOverview from "./components/SystemOverview"

import { useRecipes } from "./useRecipes"
// ===============================================

function App() {
  const {
    recipes, name, setName, ingredients, setIngredients, editingId, setEditingId, resetForm,
    loading, error, liveServer, serverName, addRecipe, deleteRecipe, fetchRecipes, startEditing, handleSubmit
  } = useRecipes()

  const [activeTab, setActiveTab] = useState("vault"); // "vault", "explorer"


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-white to-[#f0fdf4] p-4 md:p-8 font-sans text-slate-800">
        <div className="max-w-6xl mx-auto">

          <nav className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-100 shadow-sm gap-1">
              <button onClick={() => setActiveTab('vault')}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'vault' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Kitchen Vault
              </button>

              <button onClick={() => setActiveTab('explorer')}
                className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'explorer' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Code2 size={14} /> System Overview
              </button>
            </div>
          </nav>


          {activeTab === 'vault' ? (
            <>
              <Header recipes={recipes} liveServer={liveServer} serverName={serverName} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-15">
                <Sidebar
                  addRecipe={handleSubmit}
                  name={name}
                  setName={setName}
                  ingredients={ingredients}
                  setIngredients={setIngredients}
                  editingId={editingId}
                  setEditingId={setEditingId}
                  error={error}
                  fetchRecipes={fetchRecipes}
                  resetForm={resetForm}
                />

                <RecipeList
                  loading={loading}
                  recipes={recipes}
                  deleteRecipe={deleteRecipe}
                  editingId={editingId}
                  setEditingId={setEditingId}
                  startEditing={startEditing}
                />
              </div>
            </>
            ) : activeTab === 'explorer' ? (
              <SystemOverview setActiveTab={setActiveTab} />
            ) : null}

        </div>
      </div>
    </>
  )
}

export default App
