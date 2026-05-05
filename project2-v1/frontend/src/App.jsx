import { useState } from "react"
import { Edit3, Plus, Trash2, X } from "lucide-react"

import { useAppLogic } from "./useAppLogic"
import Header from "./components/Header"
import BackendLogic from "./components/BackendLogic"


function App() {
  const [view, setView] = useState("app") // "app" or "logic"

  const { tasks, setTasks, form, setForm, editingId, setEditingId, remove, handleSubmit } = useAppLogic()

  return (
    <>
      <div className="min-h-screen bg-rose-50/80 font-sans text-slate-900">
        <Header view={view} setView={setView} />

        <main className="max-w-7xl mx-auto p-6">
          {view === "app" ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Form */}
              <div className="md:col-span-5">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    {editingId ? <Edit3 size={18} /> : <Plus size={18} />}
                    {editingId ? "Update Task" : "New Task"}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      placeholder="Task Title"
                      className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 ring-blue-500/20"
                      value={form.title}
                      onChange={e => setForm({ ...form, title: e.target.value })}
                    />
                    <textarea
                      placeholder="Details or notes..."
                      className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 ring-blue-500/20 h-24"
                      value={form.details}
                      onChange={e => setForm({ ...form, details: e.target.value })}
                    />
                    <div className="flex gap-2">
                      <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition">
                        {editingId ? "Save Changes" : "Add Task"}
                      </button>
                      {editingId && (
                        <button type="button" onClick={() => { setEditingId(null); setForm({ title: "", details: "" }) }} className="p-3 bg-slate-100 rounded-xl"><X size={20} /></button>
                      )}
                    </div>
                  </form>
                </div>
              </div>


              {/* List */}
              <div className="md:col-span-7 space-y-4">
                {tasks.map(t => (
                  <div key={t.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center group">
                    <div>
                      <h3 className="font-bold text-slate-800">{t.title}</h3>
                      <p className="text-sm text-slate-500">{t.details}</p>
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                      <button onClick={() => { setEditingId(t.id); setForm({ title: t.title, details: t.details }) }} className="p-2 text-slate-400 hover:text-blue-500"><Edit3 size={18} /></button>
                      <button onClick={() => remove(t.id)} className="p-2 text-slate-400 hover:text-rose-500"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) :
            (
              <BackendLogic />
            )
          }
        </main>
      </div>
    </>
  )
}

export default App