import { useState } from "react"
import { Code2, BookOpen, ChevronLeft } from 'lucide-react'

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

    const [activeTab, setActiveTab] = useState("vault"); // "vault", "explorer", "guide"
    const placeholderView = (title, icon) => (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-white/50 backdrop-blur-lg rounded-[3rem] border border-slate-100">
        <div className="p-6 bg-emerald-100 rounded-full mb-4">{icon}</div>
        <h2 className="text-3xl font-black mb-2">{title}</h2>
        <p className="text-slate-500 max-w-md">This section is ready for your logic. You can add your backend documentation or interactive code explorers here.</p>

        <button onClick={() => setActiveTab('vault')} className="mt-8 flex items-center gap-2 text-emerald-600 font-bold hover:underline">
          <ChevronLeft size={20} /> Back to Recipe Vault
        </button>
      </div>
    );


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-white to-[#f0fdf4] p-4 md:p-8 font-sans text-slate-800">
        <div className="max-w-6xl mx-auto">

          {/* Navigation Bar */}
          <nav className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-100 shadow-sm gap-1">
              <button onClick={() => setActiveTab('vault')}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'vault' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Vault
              </button>

              <button onClick={() => setActiveTab('explorer')}
                className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'explorer' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Code2 size={14} /> Code Explorer
              </button>

              <button onClick={() => setActiveTab('guide')}
                className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'guide' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <BookOpen size={14} /> Full-App Guide
              </button>
            </div>
          </nav>


          {activeTab === 'vault' ? (
            <>
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
            </>) : activeTab === 'explorer' ? (
              placeholderView("Code Explorer", <Code2 size={40} className="text-emerald-600" />)
            ) : (
            placeholderView("Full-App Guide", <BookOpen size={40} className="text-emerald-600" />)
          )}


        </div>
      </div>
    </>
  )
}

export default App
