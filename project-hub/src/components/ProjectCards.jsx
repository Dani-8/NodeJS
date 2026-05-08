import { ArrowUpRight, FolderRoot, Server } from "lucide-react"


export default function ProjectCards({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group relative bg-[#121215] border border-white/5 rounded-[2.5rem] p-8 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                    {/* Gradient Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`} />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg`}>
                                <FolderRoot size={28} />
                            </div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                {project.version}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                            {project.tech.map(t => (
                                <span key={t} className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded-md border border-white/5 text-slate-400 uppercase tracking-wider">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex gap-3">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    Live
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                    <Server size={12} /> API Ready
                                </div>
                            </div>
                            <a
                                href={project.link}
                                className="flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all"
                            >
                                Explore <ArrowUpRight size={16} className="text-indigo-500" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}