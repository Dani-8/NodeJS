import { ClipboardList } from "lucide-react"

export default function Header({ view, setView }) {
    return (
        <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <div className="flex items-center gap-2 font-bold text-xl">
                <ClipboardList className="text-blue-500" />
                <span>TaskVault</span>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-lg">
                <button onClick={() => setView('app')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${view === 'app' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>Vault</button>
                <button onClick={() => setView('logic')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${view === 'logic' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>Backend Logic</button>
            </div>
        </nav>
    )
}