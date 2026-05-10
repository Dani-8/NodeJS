import { Briefcase,  } from "lucide-react"

export default function LoginForm() {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-indigo-500/20">
                        <Briefcase className="text-white" size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight">Job<span className="text-indigo-500">Track</span></h1>
                    <p className="text-slate-500 mt-2">Command Center for your Career.</p>
                </div>

                <div className="bg-[#0f1115] border border-white/5 rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl">
                    <div className="flex bg-black/40 p-1 rounded-xl mb-8 border border-white/5">
                        <button
                            onClick={() => setAuthView('login')}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${authView === 'login' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                        >Login</button>
                        <button
                            onClick={() => setAuthView('register')}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${authView === 'register' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                        >Sign Up</button>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-indigo-500/50 transition-all text-sm text-white"
                            />
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-indigo-500/50 transition-all text-sm text-white"
                            />
                        </div>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-xl font-bold transition shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
                            {authView === 'login' ? 'Access Console' : 'Initialize Account'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}