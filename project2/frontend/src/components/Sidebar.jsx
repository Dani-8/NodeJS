import { ChefHat, Plus, AlertCircle, RefreshCw } from 'lucide-react'

export default function Sidebar({ addRecipe, name, setName, ingredients, setIngredients, editingId, setEditingId, error, fetchRecipes }) {
    return (
        <>
            <div className="lg:col-span-4">
                <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-rose-100 shadow-2xl shadow-rose-100 sticky top-12">
                    <div className="flex items-center gap-3 mb-6">
                        <ChefHat className="text-rose-500" />
                        <h2 className="text-xl font-bold">{editingId ? 'Edit Recipe' : 'Create New Recipe'}</h2>
                    </div>

                    <form onSubmit={addRecipe} className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Recipe Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Spicy Ramen"
                                className="w-full mt-1.5 p-4 bg-white border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-400 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Key Ingredients</label>
                            <textarea
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                placeholder="e.g. Noodles, Egg, Chili oil"
                                className="w-full mt-1.5 p-4 bg-white border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-400 outline-none transition-all h-32 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 cursor-pointer bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all duration-300 active:scale-85 shadow-xl shadow-slate-200"
                        >
                            <Plus size={20} /> Add to Vault
                        </button>
                    </form>

                    {/* ===================================================================================== */}

                    {error && (
                        <div className="mt-6 p-4 bg-rose-50 text-rose-600 rounded-2xl text-xs flex items-center gap-3 border border-rose-100">
                            <AlertCircle size={16} className="shrink-0" />
                            <span>{error}</span>
                            <button onClick={fetchRecipes} className="ml-auto"><RefreshCw size={14} /></button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}