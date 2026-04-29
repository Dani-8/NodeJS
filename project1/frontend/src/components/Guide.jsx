import { CheckCircle, ArrowRight, FolderTree } from 'lucide-react'
import { useState } from "react";
import { Link } from "react-router-dom";

import steps from "./steps"
// import App from "../App";

export default function Guide() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
            <Link to="/" className="text-emerald-500 underline hover:text-rose-500 transition-colors">
                Back to Home
            </Link>

            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">Full-Stack Beginner Guide</h1>
                    <p className="text-slate-500">A step-by-step interactive map for classmates</p>
                </header>


                {/* Step Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${activeStep === index
                                    ? 'border-emerald-400 bg-white shadow-lg scale-105'
                                    : 'border-transparent bg-white/50 text-slate-400 hover:bg-white'
                                }`}
                        >
                            {step.icon}

                            <span className="text-xs font-bold uppercase tracking-wider">Step {index + 1}</span>
                        </button>
                    ))}
                </div>



                {/* Content Card */}
                <div className={`rounded-3xl p-6 md:p-10 shadow-xl transition-all duration-500 ${steps[activeStep].color}`}>
                    <div className="flex flex-col md:flex-row gap-20 ">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                {steps[activeStep].title}
                            </h2>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                {steps[activeStep].content}
                            </p>

                            <div className="space-y-3">
                                {steps[activeStep].details.map((detail, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/60 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="bg-slate-900 rounded-2xl p-4 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-emerald-400"></div>
                                <div className="flex gap-1.5 mb-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                                </div>

                                <pre className="text-xs text-emerald-100 font-mono leading-relaxed overflow-x-auto whitespace-pre">
                                    {steps[activeStep].code}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Footer Navigation */}
                <div className="mt-8 flex justify-between items-center text-slate-400">
                    <p className="text-sm italic">Press the icons above to navigate the lesson</p>

                    {activeStep < steps.length - 1 && (
                        <button onClick={() => setActiveStep(prev => prev + 1)}
                            className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all cursor-pointer"
                        >
                            Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}