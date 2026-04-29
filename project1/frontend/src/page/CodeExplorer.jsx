const CodeExplorer = () => {
    const [selectedFile, setSelectedFile] = useState("server.js");

    return (
        <div className="flex h-[calc(100vh-120px)] border rounded-xl overflow-hidden bg-slate-900 shadow-2xl">
            {/* Sidebar */}
            <div className="w-64 bg-slate-800 border-r border-slate-700 p-4">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Project Files</h3>
                <div className="space-y-1">
                    {Object.keys(codeFiles).map(fileName => (
                        <button
                            key={fileName}
                            onClick={() => setSelectedFile(fileName)}
                            className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 transition-colors ${selectedFile === fileName
                                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                    : 'text-slate-400 hover:bg-slate-700'
                                }`}
                        >
                            <FileCode size={16} />
                            <span className="text-sm truncate">{fileName}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 border-b border-slate-700 flex justify-between items-center">
                    <span>{selectedFile}</span>
                    <span className="text-emerald-500 uppercase font-bold">Read Only</span>
                </div>
                <pre className="flex-1 p-6 overflow-auto font-mono text-sm text-slate-300 bg-slate-950 leading-relaxed">
                    <code>{codeFiles[selectedFile]}</code>
                </pre>
            </div>
        </div>
    );
};