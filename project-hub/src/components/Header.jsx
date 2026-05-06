import { Layers } from "lucide-react"
import { FaGithub } from "react-icons/fa";

export default function Header(){
    return (
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                    <Layers size={14} /> Workspace / my-app
                </div>

                <h1 className="text-6xl font-black text-white tracking-tighter">
                    Project<span className="text-indigo-500 text-7xl">.</span>Hub
                </h1>

                <p className="text-slate-500 text-lg max-w-md font-medium leading-relaxed">
                    A curated collection of full-stack modules, exploring the synergy between
                    <span className="text-white"> Backend Logic</span> and <span className="text-white">Fluid UI</span>.
                </p>
            </div>


            <div className="flex gap-4">
                <a href="https://github.com/Dani-8/NodeJS" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-white">
                    <FaGithub size={22} />
                </a>
            </div>
        </header>
    )
}