import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-white to-[#f0fdf4] p-4 md:p-12 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto">

          <Header recipes={1} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Sidebar />

          </div>

          
        </div>
      </div>
    </>
  )
}

export default App
