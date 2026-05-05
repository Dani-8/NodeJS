

export default function BackendLogic() {

    return (
        <>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Database className="text-blue-500" /> System Flow</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 block mb-1">FRONTEND (Client)</span>
                        <p className="text-sm text-slate-600 font-medium">React sending JSON via Fetch API.</p>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 block mb-1">BACKEND (Server)</span>
                        <p className="text-sm text-slate-600 font-medium">Express.js processing CRUD logic on the Task array.</p>
                    </div>
                </div>


                <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-slate-300">
                    <p className="text-blue-400 mb-2">// RESTful Endpoints</p>
                    <p className="mb-1"><span className="text-blue-400">GET</span> /tasks - Fetching List</p>
                    <p className="mb-1"><span className="text-emerald-400">POST</span> /tasks - Saving New</p>
                    <p className="mb-1"><span className="text-amber-400">PUT</span> /tasks/:id - Editing Existing</p>
                    <p><span className="text-rose-400">DELETE</span> /tasks/:id - Removing Data</p>
                </div>
            </div>
        </>
    )
}