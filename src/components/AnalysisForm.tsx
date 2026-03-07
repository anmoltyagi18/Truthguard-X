"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Link as LinkIcon, FileImage, ShieldAlert, Loader2, Upload } from "lucide-react";

export default function AnalysisForm() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"text" | "url" | "image">("text");
    const [inputValue, setInputValue] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const queryToUse = activeTab === "image" ? "Image Analysis" : inputValue.trim();
        if (!queryToUse && activeTab !== "image") return;

        setIsAnalyzing(true);
        // Simulate API call and redirect to results
        setTimeout(() => {
            router.push(`/dashboard/results?q=${encodeURIComponent(queryToUse)}`);
        }, 1500);
    };

    return (
        <div className="w-full max-w-4xl mx-auto cyber-glass rounded-xl overflow-hidden shadow-2xl border border-cyber-panel-border relative">
            {/* Decorative top border */}
            <div className="h-1 w-full bg-gradient-to-r from-cyber-cyan via-cyber-accent to-cyber-bg" />

            <div className="p-1 border-b border-cyber-panel-border/50 bg-cyber-panel/30">
                <div className="flex space-x-1">
                    {[
                        { id: "text", label: "Text Snippet", icon: Search },
                        { id: "url", label: "Scan URL", icon: LinkIcon },
                        { id: "image", label: "Screenshot", icon: FileImage },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center space-x-2 px-6 py-4 text-sm font-mono transition-all duration-300 rounded-t-lg mx-1 ${isActive
                                    ? "bg-cyber-bg text-cyber-accent border-t border-l border-r border-cyber-accent cyber-glass-glow shadow-[0_-5px_15px_rgba(0,240,255,0.1)] relative top-[1px] z-10"
                                    : "text-cyber-text-secondary hover:text-white hover:bg-cyber-panel"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="p-8 bg-cyber-bg/50 backdrop-blur-md relative z-0 border-t border-cyber-panel-border/0">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-cyber-accent/5 rounded-lg blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />

                        {activeTab === "text" && (
                            <textarea
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Paste doubtful text, viral claims, or suspicious quotes here..."
                                className="w-full h-48 bg-cyber-panel/80 border border-cyber-panel-border rounded-lg p-4 text-white placeholder-cyber-text-secondary focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent transition-all duration-300 resize-none font-sans relative z-10"
                                disabled={isAnalyzing}
                            />
                        )}

                        {activeTab === "url" && (
                            <div className="relative z-10">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <LinkIcon className="h-5 w-5 text-cyber-text-secondary" />
                                </div>
                                <input
                                    type="url"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="https://example.com/suspicious-article"
                                    className="w-full bg-cyber-panel/80 border border-cyber-panel-border rounded-lg py-4 pl-12 pr-4 text-white placeholder-cyber-text-secondary focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent transition-all duration-300 font-mono"
                                    disabled={isAnalyzing}
                                />
                            </div>
                        )}

                        {activeTab === "image" && (
                            <div className="border-2 border-dashed border-cyber-panel-border hover:border-cyber-accent/50 rounded-lg p-12 flex flex-col items-center justify-center bg-cyber-panel/30 transition-colors duration-300 relative z-10 cursor-pointer group/upload">
                                <Upload className="w-12 h-12 text-cyber-text-secondary group-hover/upload:text-cyber-accent mb-4 transition-colors" />
                                <p className="text-cyber-text-primary text-center mb-2">Drag and drop a screenshot</p>
                                <p className="text-cyber-text-secondary text-sm text-center">or click to browse from your device</p>
                                <input type="file" className="hidden" disabled={isAnalyzing} />
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-cyber-panel-border/30">
                        <div className="flex items-center space-x-2 text-xs text-cyber-text-secondary font-mono">
                            <ShieldAlert className="w-4 h-4 text-cyber-cyan" />
                            <span>Encrypted connection • Military-grade analysis</span>
                        </div>

                        <button
                            type="submit"
                            disabled={isAnalyzing || (!inputValue.trim() && activeTab !== "image")}
                            className={`flex items-center space-x-2 px-8 py-3 rounded-md font-bold font-mono uppercase tracking-wider transition-all duration-300 ${isAnalyzing
                                ? "bg-cyber-panel-border text-cyber-text-secondary cursor-not-allowed"
                                : inputValue.trim() || activeTab === "image"
                                    ? "bg-cyber-accent/20 text-cyber-accent border border-cyber-accent hover:bg-cyber-accent hover:text-black cyber-glass-glow"
                                    : "bg-cyber-panel border border-cyber-panel-border text-cyber-text-secondary cursor-not-allowed"
                                }`}
                        >
                            {isAnalyzing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Analyzing...</span>
                                </>
                            ) : (
                                <>
                                    <Search className="w-5 h-5" />
                                    <span>Initiate Intelligence Scan</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* Decorative scanning line animation during analysis */}
            {isAnalyzing && (
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-accent shadow-[0_0_10px_#00f0ff] animate-[scan_2s_ease-in-out_infinite]" />
            )}
        </div>
    );
}
