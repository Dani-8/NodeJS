export default function Footer() {
    return (
        <footer className="mt-24 pt-12 border-t border-white/15 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <div className="flex gap-6">
                <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    All Systems Operational
                </span>
            </div>

            <span className="font-mono lowercase text-slate-600">
                root@portfolio:~# done
            </span>
        </footer>
    )
}