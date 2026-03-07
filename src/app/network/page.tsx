import { Network } from "lucide-react";
import NetworkGraph from "@/components/NetworkGraph";

export default function NetworkPage() {
    return (
        <div className="flex-1 p-6 lg:p-12 relative flex flex-col items-center">
            <div className="w-full max-w-5xl mb-8 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-cyber-panel-border/50 pb-6 pt-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-2 flex items-center gap-3">
                        <Network className="text-cyber-cyan w-10 h-10" />
                        <span>Propagation Network</span>
                    </h1>
                    <p className="text-cyber-text-secondary font-mono text-sm max-w-2xl">
                        Visualize the infection vectors of misinformation. The AI tracks repost chains, super-spreaders, and bot amplifications across platforms.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-5xl">
                <NetworkGraph />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="cyber-glass p-6 rounded-xl border border-cyber-panel-border">
                        <h3 className="font-bold text-lg mb-3">Threat Analysis</h3>
                        <p className="text-sm text-cyber-text-secondary mb-4">
                            The graph identifies <span className="text-cyber-red font-bold">randomhealthnews.com</span> as Patient Zero. The claim was rapidly pushed into mainstream social networks orchestrated by coordinated <span className="text-cyber-cyan font-bold">Bot Net A</span>.
                        </p>
                        <div className="w-full bg-cyber-panel/50 rounded-full h-2 mb-1">
                            <div className="bg-cyber-red h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <div className="text-xs text-right font-mono text-cyber-text-secondary">85% Bot Amplification</div>
                    </div>

                    <div className="cyber-glass p-6 rounded-xl border border-cyber-panel-border">
                        <h3 className="font-bold text-lg mb-3">Key Nodes</h3>
                        <ul className="space-y-2 text-sm font-mono">
                            <li className="flex justify-between items-center border-b border-cyber-panel-border/30 pb-2">
                                <span className="text-white">Bot Net A</span>
                                <span className="text-cyber-cyan">4k+ Reposts</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-cyber-panel-border/30 pb-2">
                                <span className="text-white">Viral Telegram</span>
                                <span className="text-cyber-amber">1.2M Reach</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-cyber-panel-border/30 pb-2">
                                <span className="text-white">FB TruthSeekers</span>
                                <span className="text-cyber-cyan">Moderate Risk</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
