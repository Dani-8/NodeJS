import { Flame } from 'lucide-react'

export default function Header({recipes}) {
    return (
        <>
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest">
                        <Flame size={14} className="animate-pulse" /> Chef Mode Active
                    </div>
                    <h1 className="text-5xl font-black tracking-tight text-slate-900">
                        Kitchen<span className="text-emerald-500">Vault</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Your personal full-stack recipe repository.</p>
                </div>


                <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[100px]">
                        <span className="text-2xl font-black text-emerald-500">{recipes.length}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Recipes</span>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[100px]">
                        <span className="text-2xl font-black text-rose-500">Live</span>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Server</span>
                    </div>
                </div>
            </header>
        </>
    )
}