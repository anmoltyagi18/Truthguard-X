import { Cpu } from "lucide-react";
import AnalysisForm from "@/components/AnalysisForm";

export default function DashboardPage() {
    return (
        <div className="flex-1 p-6 lg:p-12 relative flex flex-col items-center">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-cyber-accent/5 rounded-full blur-[150px]" />
            </div>

            <div className="w-full max-w-5xl mb-12 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-cyber-panel-border/50 pb-6 pt-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-2 flex items-center gap-3">
                        <Cpu className="text-cyber-accent w-10 h-10" />
                        <span>AI Command Center</span>
                    </h1>
                    <p className="text-cyber-text-secondary font-mono text-sm max-w-2xl">
                        Submit suspicious content for multi-vector threat analysis. Our intelligence engine correlates claims against global trusted databases.
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-cyber-panel/50 px-4 py-2 rounded-lg border border-cyber-panel-border">
                    <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse glow-text" />
                    <span className="text-sm font-mono text-cyber-green">API Connected</span>
                </div>
            </div>

            <AnalysisForm />

            {/* Quick stats or hints */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                <div className="text-center p-4">
                    <div className="text-2xl font-bold text-white mb-1">94.8%</div>
                    <div className="text-xs text-cyber-text-secondary font-mono tracking-wider uppercase">Detection Accuracy</div>
                </div>
                <div className="text-center p-4 border-l border-r border-cyber-panel-border/30">
                    <div className="text-2xl font-bold text-white mb-1">2.4M+</div>
                    <div className="text-xs text-cyber-text-secondary font-mono tracking-wider uppercase">Nodes Tracked</div>
                </div>
                <div className="text-center p-4">
                    <div className="text-2xl font-bold text-white mb-1">&lt; 150ms</div>
                    <div className="text-xs text-cyber-text-secondary font-mono tracking-wider uppercase">Avg Analysis Time</div>
                </div>
            </div>
        </div>
    );
}
