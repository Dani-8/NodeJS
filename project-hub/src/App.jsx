import projects from "./projectsData"

export default function App(){
  return(
    <>
      <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      

      </div>
    </>
  )
}