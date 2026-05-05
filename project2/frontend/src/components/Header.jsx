import { Flame } from 'lucide-react'

export default function Header({recipes, liveServer, serverName}) {
    return (
        <>
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold uppercase tracking-widest">
                        <Flame size={13} className="animate-pulse" /> Chef Mode Active
                    </div>
                    <h1 className="text-5xl font-black tracking-tight text-slate-900">
                        Kitchen<span className="text-emerald-500">Vault</span>
                    </h1>
                    <p className="w-lg text-slate-500 font-medium">Personal full-stack recipe manager designed to help you organize, curate, and explore your favorite dishes with ease.</p>
                </div>


                <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-200/50 border border-slate-100 flex flex-col items-center min-w-[100px] transition-all duration-300">
                        <span className="text-2xl font-black text-emerald-500">{recipes.length}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Recipes</span>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-200/50 border border-slate-100 flex flex-col items-center min-w-[100px] transition-all duration-300">
                        <span className="text-2xl font-black text-rose-500">{liveServer ? 'Live' : 'Offline'}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">{serverName} Server</span>
                    </div>
                </div>
            </header>
        </>
    )
}