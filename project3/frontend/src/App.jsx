import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Trash2, CheckCircle2, ClipboardList, Loader2 } from "lucide-react";
// ======================================================================================

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000/tasks";

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!input.trim()) return;
    try {
      await axios.post(API, { text: input });
      setInput("");
      fetchTasks();
    } catch (err) {
      console.error("Failed to add task", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-900">
      <div className="max-w-md mx-auto">

        {/* HEADER */}
        <div className="text-center my-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Task Manager
          </h1>
        </div>


        {/* FORM */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-2 mb-8 focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-200">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="What needs to be done?"
            className="flex-1 bg-transparent outline-none px-4 py-2 text-slate-700 placeholder:text-slate-400"
          />

          <button 
            onClick={addTask}
            disabled={!input.trim()}
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white p-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center shadow-md shadow-indigo-200"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>


        {/* result */}
        <div className="space-y-3">
          {loading && tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-2" />
              <p>Loading your tasks...</p>
            </div>
          ) : tasks.length > 0 ? (
            tasks.map((t) => (
              <div 
                key={t._id} 
                className="group flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span className="text-slate-700 font-medium">{t.text}</span>
                </div>
                <button 
                  onClick={() => deleteTask(t._id)}
                  className="cursor-pointer opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                  aria-label="Delete task"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <ClipboardList className="w-12 h-12 text-slate-300 mx-auto mb-4" />

              <h3 className="text-slate-900 font-semibold">No tasks yet</h3>
              <p className="text-slate-500 text-sm mt-1">Add your first task above to get started.</p>
            </div>
          )}
        </div>

        
        {/* Tasks counter */}
        {tasks.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              {tasks.length} total {tasks.length === 1 ? 'task' : 'tasks'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;