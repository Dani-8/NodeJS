import { ChefHat, Clock, Trash2, UtensilsCrossed } from 'lucide-react'

export default function RecipeList({recipes, loading, deleteRecipe}) {
    return (
        <>
            <div className="lg:col-span-8">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-48 bg-slate-100 animate-pulse rounded-[2rem]"></div>
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
                                className="group bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-[4rem] -mr-12 -mt-12 group-hover:bg-emerald-50 transition-colors"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors">
                                            <ChefHat className="text-slate-400 group-hover:text-emerald-500" size={24} />
                                        </div>
                                        <button
                                            onClick={() => deleteRecipe(recipe.id)}
                                            className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                                        >
                                            <Trash2 size={20} />
                                        </button>
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