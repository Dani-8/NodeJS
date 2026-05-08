import Header from "./components/Header"
import Footer from "./components/Footer"
import projects from "./projectsData"
import ProjectCards from "./components/ProjectCards"

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-indigo-500/30">
        {/* Background Decor */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

          <Header />

          <ProjectCards projects={projects} />

          <Footer />
        </div>
      </div>
    </>
  )
}