import { useEffect, useState } from 'react'
import { ChefHat, Clock, Trash2, UtensilsCrossed, Edit3 } from 'lucide-react'

export default function RecipeList({ recipes, loading, deleteRecipe, editingId, setEditingId, startEditing }) {
    const initialPlaceholderColors = ['bg-rose-50', 'bg-emerald-50', 'bg-rose-50', 'bg-emerald-50', 'bg-rose-50']

    const shuffle = (arr) => {
        const copy = [...arr]
        
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[copy[i], copy[j]] = [copy[j], copy[i]]
        }

        return copy
    }

    const [shuffledPlaceholderColors, setShuffledPlaceholderColors] = useState(() =>
        shuffle(initialPlaceholderColors)
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setShuffledPlaceholderColors(shuffle(initialPlaceholderColors))
        }, 400)

        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <div className="lg:col-span-8">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`h-48 animate-pulse rounded-[2rem] transition-colors duration-200 ease-out ${shuffledPlaceholderColors[i]}`}></div>
                        ))}
                    </div>
                ) : recipes.length === 0 ? (
                    <div className="bg-white/40 border-4 border-dashed border-slate-100 rounded-[3rem] py-24 flex flex-col items-center">
                        <UtensilsCrossed size={48} className="text-slate-200 mb-4" />
                        <p className="text-slate-400 font-medium">Your vault is currently empty.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className={`group bg-white p-6 rounded-[2rem] border shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden ${editingId === recipe.id ? 'ring-2 ring-amber-400 border-amber-200' : 'border-slate-50 hover:shadow-emerald-100/50 hover:-translate-y-1'}`}
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[4rem] -mr-12 -mt-12 transition-colors ${editingId === recipe.id ? 'bg-amber-50' : 'bg-rose-50 group-hover:bg-emerald-50'}`}></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-2xl transition-colors ${editingId === recipe.id ? 'bg-amber-100' : 'bg-slate-50 group-hover:bg-white'}`}>
                                            <ChefHat className={editingId === recipe.id ? 'text-amber-600' : 'text-slate-400 group-hover:text-emerald-500'} size={24} />
                                        </div>

                                        <div className="flex gap-1">
                                            <button onClick={() => startEditing(recipe)}
                                                className={`p-2 transition-all duration-300 cursor-pointer hover:text-emerald-500 hover:bg-emerald-50 rounded-xl ${editingId === recipe.id ? 'text-amber-600' : 'text-slate-300'}`}
                                            >
                                                <Edit3 size={20} />
                                            </button>

                                            <button onClick={() => deleteRecipe(recipe.id)}
                                                className="p-2 cursor-pointer text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-300 active:scale-80"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>


                                    <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                                        {recipe.title}
                                    </h3>

                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                                        {recipe.ingredients || "No ingredients listed yet."}
                                    </p>


                                    <div className="mt-6 flex items-center gap-4 text-[10px] font-black uppercase tracking-tighter text-slate-400">
                                        <span className="flex items-center gap-1"><Clock size={12} /> 15 Min</span>
                                        <span className="flex items-center gap-1 font-bold text-rose-400">Easy</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}