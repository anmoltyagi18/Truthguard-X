import { Activity, Globe, Flame, AlertTriangle } from "lucide-react";
import ThreatRadar from "@/components/ThreatRadar";

export default function RadarPage() {
    const trendingTopics = [
        { name: "Fake CBD COVID Cures", category: "Health", score: 98, trend: "up", color: "text-cyber-red" },
        { name: "AI Voices in Phishing", category: "Scams", score: 94, trend: "up", color: "text-cyber-amber" },
        { name: "Deepfake Election Rally", category: "Politics", score: 87, trend: "down", color: "text-cyber-cyan" },
        { name: "Flash Crash Rumors", category: "Finance", score: 82, trend: "up", color: "text-cyber-cyan" },
        { name: "UFO Declassification Fake", category: "Conspiracy", score: 76, trend: "flat", color: "text-cyber-green" },
    ];

    return (
        <div className="flex-1 p-6 lg:p-12 relative flex flex-col items-center">
            <div className="w-full max-w-6xl mb-8 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-cyber-panel-border/50 pb-6 pt-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-2 flex items-center gap-3">
                        <Globe className="text-cyber-red w-10 h-10 animate-[pulse_4s_ease-in-out_infinite]" />
                        <span>Global Threat Radar</span>
                    </h1>
                    <p className="text-cyber-text-secondary font-mono text-sm max-w-2xl">
                        Real-time monitoring of misinformation ecosystems. We scan millions of social media posts, news sites, and forums to identify emerging propaganda.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="w-full">
                    <ThreatRadar />
                </div>

                <div className="space-y-6">
                    <div className="cyber-glass rounded-xl p-6 border border-cyber-panel-border">
                        <h3 className="text-lg font-bold font-mono tracking-widest text-cyber-text-primary mb-4 flex items-center gap-2">
                            <Flame className="w-5 h-5 text-cyber-amber" />
                            HOTSPOTS & TRENDING
                        </h3>

                        <div className="space-y-4">
                            {trendingTopics.map((topic, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-cyber-panel/50 border border-cyber-panel-border transition-colors hover:border-cyber-accent hover:bg-cyber-panel">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white mb-1">{topic.name}</span>
                                        <span className="text-xs font-mono text-cyber-text-secondary uppercase">{topic.category}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-end">
                                            <span className={`text-xl font-bold ${topic.color}`}>{topic.score}</span>
                                            <span className="text-[10px] text-cyber-text-secondary font-mono uppercase tracking-widest">Severity</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cyber-glass rounded-xl p-6 border border-cyber-red/30 bg-cyber-red/5">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-8 h-8 text-cyber-red shrink-0" />
                            <div>
                                <h4 className="font-bold text-cyber-red mb-1">CRITICAL ALERT</h4>
                                <p className="text-sm text-cyber-text-primary font-mono leading-relaxed">
                                    System detects a highly coordinated bot network pushing health misinformation targeting North American demographics. Amplification rate has increased by 400% in the last 2 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
