import { BookOpen, ChevronLeft, Code2, Cpu, Database, Server } from 'lucide-react'

export default function CodeExplorer({ setActiveTab }) {

    return (
        <>
            <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[3rem] border border-slate-100 shadow-xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-emerald-500 text-white rounded-2xl">
                            <Code2 size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black">Backend Logic</h2>
                            <p className="text-slate-500">How KitchenVault processes your requests</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 bg-rose-50 rounded-[2rem] border border-rose-100">
                            <Server className="text-rose-500 mb-3" size={24} />
                            <h4 className="font-bold text-sm uppercase mb-1">Server</h4>
                            <p className="text-xs text-slate-600 leading-relaxed text-balance">Express.js running on Port 5000, listening for HTTP requests.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                            <Cpu className="text-emerald-500 mb-3" size={24} />
                            <h4 className="font-bold text-sm uppercase mb-1">Routes</h4>
                            <p className="text-xs text-slate-600 leading-relaxed text-balance">Defined endpoints like /tasks that map actions to logic.</p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-[2rem] border border-blue-100">
                            <Database className="text-blue-500 mb-3" size={24} />
                            <h4 className="font-bold text-sm uppercase mb-1">State</h4>
                            <p className="text-xs text-slate-600 leading-relaxed text-balance">Data stored in a persistent JavaScript array on the server.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold px-2">API Documentation</h3>
                        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 p-6 font-mono text-sm text-emerald-400">
                            <div className="mb-4 pb-4 border-b border-slate-800">
                                <span className="text-rose-400 font-bold">GET</span> /tasks <span className="text-slate-500 ml-4">// Returns all recipes</span>
                            </div>
                            <div className="mb-4 pb-4 border-b border-slate-800">
                                <span className="text-blue-400 font-bold">POST</span> /tasks <span className="text-slate-500 ml-4">// Creates new recipe object</span>
                            </div>
                            <div>
                                <span className="text-orange-400 font-bold">DELETE</span> /tasks/:id <span className="text-slate-500 ml-4">// Removes specific ID</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setActiveTab('vault')} className="mt-8 flex items-center gap-2 text-emerald-600 font-bold hover:underline">
                        <ChevronLeft size={20} /> Back to Recipe Vault
                    </button>
                </div>
            </div>
        </>
    )
}